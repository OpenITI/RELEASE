var table;
var issueURItempl = "<a href ='https://github.com/OpenITI/Annotation/issues/new?";
issueURItempl += "assignees=&labels=enhancement&template=change-uri.md&title=";

// Add Arabic font for pdfMake:
pdfMake.fonts = {
      Amiri: {
              normal: 'Amiri-Regular.ttf',
              bold: 'Amiri-Bold.ttf',
              italics: 'Amiri-Slanted.ttf',
              bolditalics: 'Amiri-BoldSlanted.ttf'
      }
}
console.log("test");
console.log(pdfMake.fonts);

$(document).ready(function () {

    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }


    var srtContainer;
    var count;

    function checknull(data) {

        if (data != null) {
            return data;
        }
        else {
            return '';
        }

    }


    table = $('#example').DataTable({

        //"sDom": '<"wrapper"lfptip>',
        "sDom": "<'row rowpadding'B><'row'><'row'<'col-md-6'ilp><'col-md-6'f>r>t<'row'<'col-md-4'i>><'row'<'#colvis'>p>",
        "autoWidth": false,

        "createdRow": function (row, data, dataIndex) {
            /*if (data['url'].includes('completed') || data['url'].includes('inProgress') || data['url'].includes('mARkdown')) {
                $(row).addClass('completed');
            }*/

            if (data['status'].includes('pri')) {
                $('tr').addClass('.primary_book')
            }
        },

        "pageLength": 50,
        "colReorder": true,
        dom: 'Bfrtip',
        buttons: [
            //'copyHtml5',
           // 'excelHtml5',
            //'pdfHtml5',
            // Add Arabic font for pdfMake:
            // See https://pdfmake.github.io/docs/fonts/custom-fonts-client-side/
            // and https://datatables.net/reference/button/pdfHtml5
            // {
            //     extend: 'pdfHtml5',
            //     filename: 'kitab-corpusmetadata',
            //     stripHtml: true,
            //     exportOptions: { orthogonal: 'rawExport' },
            //     customize: function ( doc ) {
            //         doc.defaultStyle.font = "Amiri";
            //     }
            // },
            {
                extend: 'excel',
                filename: 'kitab-corpusmetadata',
                stripHtml: true,
                exportOptions: { orthogonal: 'rawExport' },
            },
            {
                extend: 'csv',
                filename: 'kitab-corpusmetadata',
                stripHtml: true,
                exportOptions: { orthogonal: 'rawExport' },
            },
            {

                text: 'Primary Books Only',
                className: 'btn btn-light',
                action: function (e, dt, node, config) {

                    $.fn.dataTable.ext.search.push(
                        function (settings, data, dataIndex) {
                            console.log(data[8])
                            return data[8].trim() == 'pri'

                        }
                    )
                    table.draw();
                    $.fn.dataTable.ext.search.pop();
                }
            },


            {
                text: 'All',
                action: function (e, dt, node, config) {
                  table.search("").draw();
                }
            },
        ],
        "deferRender": true,
        "ajax": "db/OpenITI_metadata_light-arabic.json",

        "columns": [
            {
                "data": 'id',
                "render": function (data, type, row) {
                    if (type === 'rawExport') {
                        return data;
                    }

                    // add color-coded marker for annotation status of the version:
                    var ext = row["url"].split(".")[row["url"].split(".").length - 1];
                    if (ext === 'completed') {
                        var cellContent = " <i class='fas fa-record-vinyl " + ext + "' title='Annotation completed'></i>";
                    } else if (ext === 'mARkdown') {
                        var cellContent = " <i class='fas fa-record-vinyl " + ext + "' title='Annotation completed and vetted'></i>";
                    } else if (ext === 'inProgress') {
                        var cellContent = " <i class='fas fa-record-vinyl " + ext + "' title='Annotation in progress'></i>";
                    } else {
                        var cellContent = " <i class='fas fa-record-vinyl not-annotated' title='Not yet annotated'></i>";
                    }

                    // add version ID + link to the full text
                    cellContent += '<strong><a href="' + row['url'] + '" target="_blank" title="' + row['url'] + '"> ' + data + '</a><br/></strong>'

                    // add Arabic title of the book
                    cellContent += row['title'];

                    // add info about the primary/secondary status of the version:
                    if (row['status'] === 'pri') {
                        cellContent += '<p title="This is the primary version of this text">PRI</p>'
                    } else {
                        cellContent += '<p title="This is the secondary version of this text">SEC</p>'
                    }

                    // add links to issues related to this text version:
                    if (row["version_issues"].length > 0) {
                        var tag = '<span class="extant issues">';
                        //console.log(row["book"] + ": ");
                        //console.log(row["version_issues"])
                        row["version_issues"].forEach(function (item) {
                            if (item[1] === "URI change suggestion") {
                                var changeUri = "<a href ='https://github.com/OpenITI/Annotation/issues/" + item[0] + "' target=_blank title='Change URI issue " + item[0] + " on GitHub'> <i class='fas fa-exchange-alt bug' aria-hidden='true'></i></a>"
                                tag += changeUri;
                            } else if (item[1] === "PRI & SEC Versions") {
                                var priSec = "<a href ='https://github.com/OpenITI/Annotation/issues/" + item[0] + "' target=_blank title='Switch primary/secondary issue " + item[0] + " on GitHub'> <i class='fas fa-sync-alt bug' aria-hidden='true'></i></a>";
                                tag += priSec;
                            } else if (item[1] === "text quality") {
                                var textQual = "<a href ='https://github.com/OpenITI/Annotation/issues/" + item[0] + "' target=_blank title='Text quality issue " + item[0] + " on GitHub'> <i class='fas fa-bug' aria-hidden='true'></i></a>";
                                tag += textQual;
                            }
                        });
                        cellContent += tag + '<br/></span>';
                    }

                    // wrap the current contents in a div; vertically aligned with the top
                    cellContent = '<div>' + cellContent + "<br/><br/><br/></div>";

                    // add a new div, vertically aligned with the bottom, with links to raise issues:
                    var versionuri = row['url'].split('/')[9];
                    var opentag = '<span class="issues">';
                    var textQuality = "<a href='https://github.com/OpenITI/Annotation/issues/new?assignees=&labels=text+quality&template=text-quality-issue-.md&title=" + versionuri + "'target=_blank title='Full Text Quality Issue - raise issue on GitHub'> <i class='fas fa-bug bug' aria-hidden='true'></i></a>";
                    var inProgress = " <a href='https://github.com/OpenITI/Annotation/issues/new?assignees=&labels=in+progress&template=in-progress.md&title=IN+PROGRESS: " + versionuri + "'target=_blank title='Report Text In Progress  - raise issue on GitHub'> <i class='fas fa-tasks bug' aria-hidden='true'></i></a>";
                    var completedText = "<a href='https://github.com/OpenITI/Annotation/issues/new?assignees=&labels=text+tagged&template=submission-report--for-pull-requests-.md&title=" + versionuri + "'target=_blank title='Report Text Tagged - raise issue on GitHub'> <i class='fas fa-tag bug'aria-hidden='true' ></i></a>";
                    var changeUri = issueURItempl + versionuri + "' target=_blank title='Change URI - raise issue on GitHub'> <i class='fas fa-exchange-alt bug' aria-hidden='true'></i></a>";
                    var priSec = "<a href='https://github.com/OpenITI/Annotation/issues/new?assignees=&labels=PRI+%26+SEC+Versions&template=pri-vs-sec.md&title=" + versionuri + "'target=_blank title='Request change of primary text - raise issue on GitHub'> <i class='fas fa-sync-alt bug' aria-hidden='true'></i></a>";
                    var endtag = '</span>';

                    return cellContent + '<div class="add-issue">Raise a version issue <br/>' + opentag + changeUri + textQuality + completedText + inProgress + priSec + endtag + "</div>";
                }
            },

            {
                "data": "book",
                "render": function (data, type, row, meta) {

                    if (type === 'rawExport') {
                        return data;
                    }
                    var cellContent = '<div><strong>'

                    // make link to book folder on GitHub:
                    d = data.substring(0, 4);
                    d = pad(Math.ceil(d / 25) * 25, 4)
                    bookFolderUrl = 'https://github.com/OpenITI/' + d + 'AH' + '/tree/master/data/' + data.split(".")[0] + "/" + data
                    //console.log(bookFolderUrl)
                    cellContent += '<a href="' + bookFolderUrl + '" target="_blank" title="' + bookFolderUrl + '">'

                    // make Latin version of book title and add to cellContent:
                    var i = data.indexOf('.')
                    data = data.substring(i + 1);
                    data = data.replace(/([A-Z])/g, ' $1').trim();
                    cellContent += data + '</a><br/></strong>' + row['title'].split("::")[1];


                    //
                    if (row["book_issues"].length > 0) {
                        var tag = '<span class="extant issues">';
                        row["book_issues"].forEach(function (item) {
                            if (item[1] === "URI change suggestion") {
                                var changeUri = "<a href ='https://github.com/OpenITI/Annotation/issues/" + item[0] + "' target=_blank title='Change URI issue " + item[0] + " on GitHub'> <i class='fas fa-exchange-alt bug' aria-hidden='true'></i></a>"
                                tag += changeUri;
                            } else if (item[1] === "text quality") {
                                var textQual = "<a href ='https://github.com/OpenITI/Annotation/issues/" + item[0] + "' target=_blank title='Text quality issue " + item[0] + " on GitHub'> <i class='fas fa-bug' aria-hidden='true'></i></a>";
                                tag += textQual;
                                //console.log("Text quality issue: "+row["book"]);
                            }
                        });
                        cellContent += "<br/>" + tag + '</span>';
                    }

                    // close first part of the cell content,
                    // to be vertically aligned with the top of the cell
                    cellContent += '<br/><br/><br/></div>'

                    // make link to raise issue with the book title URI:
                    var split_url = row['url'].split('/');
                    var versionuri = split_url[split_url.length - 1];
                    var bookuri = versionuri.split(".").slice(0, 2).join(".");
                    var intro = '<div class="add-issue">Raise a book title issue<br/>';
                    var opentag = '<span class="issues">';
                    var changeUri = issueURItempl + bookuri + "' target=_blank title='Change title URI - raise issue on GitHub'>";
                    changeUri += " <i class='fas fa-exchange-alt bug' aria-hidden='true'></i></a>";
                    var endtag = '</span>';

                    return cellContent + intro + opentag + changeUri + endtag;
                }
            },

            {
                "data": "author",
                "render": function (data, type, row, meta) {

                    if (type === 'rawExport') {
                        return data;
                    }

                    // make link to author folder on GitHub:
                    d = row["book"].substring(0, 4);
                    d = pad(Math.ceil(d / 25) * 25, 4);
                    authorUrl = 'https://github.com/OpenITI/' + d + 'AH' + '/tree/master/data/' + row["book"].split(".")[0];
                    d = checknull(data);
                    var authorLink = '<strong><a href="' + authorUrl + '" target="_blank" title="' + authorUrl + '">';
                    authorLink += d.split("::")[0] + '</a></strong>';
                    var authorDiv = "<div class='author text-wrap'>" + authorLink + "<br/>";

                    // add the Arabic version(s) of the author name:
                    if (d.split("::").length > 1) {
                        authorDiv += d.split("::")[1];
                    }

                    // add links to GitHub issues related to the author uri:
                    if (row["author_issues"].length > 0) {
                        var tag = '<span class="extant issues">';
                        row["author_issues"].forEach(function (item) {
                            if (item[1] === "URI change suggestion") {
                                var issueUri = "<a href ='https://github.com/OpenITI/Annotation/issues/" + item[0];
                                issueUri += "' target=_blank title='Change URI issue " + item[0] + " on GitHub'>";
                                issueUri += " <i class='fas fa-exchange-alt bug' aria-hidden='true'></i></a>";
                                tag += issueUri;
                            }
                        });
                        authorDiv += "<br/>" + tag + '</span>';
                    }

                    // Close the first div of the cell,
                    // to be aligned vertically with the top of the cell:
                    authorDiv += '<br/><br/><br/></div>';

                    // Add link to raise issues about the author URI:
                    var split_url = row['url'].split('/');
                    var versionuri = split_url[split_url.length - 1];
                    var authoruri = versionuri.split(".")[0];
                    var intro = '<div class="add-issue">Raise an author issue <br/>';
                    var opentag = '<span class="issues">';
                    var changeUri = issueURItempl + authoruri + "' target=_blank title='Change URI - raise issue on GitHub'>";
                    changeUri += " <i class='fas fa-exchange-alt bug' aria-hidden='true'></i></a>";
                    var endtag = '</span>';

                    return authorDiv + intro + opentag + changeUri + endtag;
                }
            },

            {
                "data": "date",
                render: function (data) {

                    return "<div class='text-wrap'>" + checknull(data) + "</div>";
                }
            },

            {
                "data": "length",
                render: function (data) {
                    return "<div class='text-wrap'>" + checknull(data) + "</div>";
                }
            },

            {
                "data": "ed_info",
                "render": function (data, type, row, meta) {
                    data = checknull(data);
                    if (data == "") {
                        return data;
                    } else {
                        return '<div class="editor">' + data + '</div><br/>';
                    }
                }
            },

            {
                "data": "tags",
                "render": function (data, type, row, meta) {
                    /*                    tags = data.replace(/;_|_|;/g, "; ");
                                        Atags = checknull(row['classification']);
                                        Atags = Atags.replace(/::|_|;/g, ":: ");

                                        return "<div class='tag text-wrap'>" + tags + "<br/>" + Atags + "</div>";
                                        */
                    tags = checknull(data);
                    tags = tags.replace(/;|_/g, "");
                    return "<div class='tag text-wrap'>" + tags + "</div>";
                }

            },


            {
              "data": "srts",
              "render": function (data, type, row, meta) {
                var cellContent = "";
                for (var i=0; i<data.length; i++) {
                  cellContent += '<a href="'+ data[i][1] +'" target="_blank">';
                  cellContent += data[i][0] + '</a><br/>'
                }

                return '<div class="LTR">' + cellContent + '</div>'
              }
            },
            {
                "data": "status",
                "visible": false
            },

            {
                "data": "url",
                "visible": false
            },



        ]

    });

    $('#inProgressFilter').on('click',function() {
      table.search("inProgress").draw();
    });

    $('#AnnotationCompletedFilter').on('click',function() {
      table.search("completed").draw();
    });

    $('#AnnotationVettedFilter').on('click',function() {
      table.search("mARkdown").draw();
    });

    $('#notYetAnnotatedFilter').on('click',function() {
      console.log("filtering...");
      table.search("(?<!mARkdown|completed|inProgress)$", true).draw();
    });

});
