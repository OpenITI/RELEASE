

//var url = "https://raw.githubusercontent.com/sohailmerchant/js-dev-env/master/kitab-openITI.json"
var url = "https://raw.githubusercontent.com/OpenITI/Annotation/master/OpenITI_metadata_light.json"
//var urlcsv = "https://raw.githubusercontent.com/OpenITI/Annotation/master/OpenITI_metadata_light.csv"
//var totalRecords;
var table;

// function csvJSON(csv) {
//     var lines = csv.split("\n");
//     var result = [];
//     var headers = lines[0].split(",");

//     for (var i = 1; i < lines.length; i++) {
//         var obj = {};
//         var currentline = lines[i].split(",");

//         for (var j = 0; j < headers.length; j++) {
//             obj[headers[j]] = currentline[j];
//         }
//         result.push(obj);
//     }
//     //JSON object
//     return JSON.stringify(result);
// }

$(document).ready(function () {

    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
      }

    var return_first;
    var myData = [];

    var srtContainer;

    var table = $('#example').DataTable({

        "autoWidth": false,
        "pageLength": 50,
        "colReorder": true,
        dom: 'Bfrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'pdfHtml5',
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
                            return data[4].trim() == 'PRI'

                        }
                    )
                    table.draw();
                    $.fn.dataTable.ext.search.pop();
                }
            },

            {
                text: 'All',
                action: function (e, dt, node, config) {
                    table.draw();
                }
            },


        ],

        //"orderFixed": [ 2, 'des' ],
        //"processing": true,
        //"ajax": "db/jsoncsv.json",
        "deferRender": true,
        "ajax": {
            //async: false,
            //     'type': "GET",
            //     'dataType': 'text',
            'url': url,






        },
        "initComplete": function (settings, json) {
            getdata(json);
        },

        // "initComplete":function( settings, data){
        //     console.log(data);
        //     return_first = data.data;
        //     return getdata(data.data);
        // },


        "columns": [

            {
                "data": "id",
                "render": function (data, type, row, meta) {
                    data = data
                    var fullbookuri = row['url'].split('/')[9];
                    return data ;

                }



            },

            { "data": "date" },

            {
                "data": "author",
                "render": function (data, type, row, meta) {
                    s = data.substring(4);
                    d = data.substring(0,4);
                    d = pad(Math.ceil(d / 25) * 25,4)
                    a = 'https://raw.githubusercontent.com/OpenITI/'+d+'AH'+'/master/data/'+data+'/'+data+'.yml'
                    
                    s = s.replace(/([A-Z])/g, ' $1').trim();
                    f = "<a href ='" +a+"' target=_blank>"+s+"</a>"
                   
                    return f;
                    //return s = s.replace(/([A-Z])/g, ' $1').trim();

                }
            },

            {
                "data": "book",
                "render": function (data, type, row, meta) {
                    //console.log(row['url']+'.yml');
                    var i = data.indexOf('.')
                    data = data.substring(i + 1);
                    data = data.replace(/([A-Z])/g, ' $1').trim();
                    f = "<a href ='" +row['url']+".yml' target=_blank>"+data+"</a>"
                    
                    return f

                }

            },

            {
                "data": "status",
                "render": function (data, type, row, meta) {
                    data = data.toUpperCase();
                    var fullbookuri = row['url'].split('/')[9];
                    //return data.toUpperCase(); 
                    return data + " <span class='bugspan issues'> <a href ='https://github.com/OpenITI/Annotation/issues/new?assignees=&labels=question&template=pri-vs-sec.md&title=" + fullbookuri + "' target=_blank title='Change Text Status - raise issue on GitHub'> <i class='fas fa-bug bug'></i></a></span>";


                }

            },
            { "data": "length" },
            {
                "data": "url",
                "render": function (data, type, row, meta) {
                    if (type === 'rawExport') {
                        return data;
                    }
                    var fullbookuri = row['url'].split('/')[9];
                    var defaultLink = '<a href="' + data + '" target="_blank">Read the full text</a><br/><br/>';
                    var opentag = '<span class="issues">'
                    var textQuality = "<a href='https://github.com/OpenITI/Annotation/issues/new?assignees=&labels=text+quality&template=text-quality-issue-.md&title=" + fullbookuri + "'target=_blank title='Full Text Quality Issue - raise issue on GitHub'> <i class='fas fa-bug bug' aria-hidden='true'></i></a>";
                    var inProgress = " <a href='https://github.com/OpenITI/Annotation/issues/new?assignees=&labels=in+progress&template=in-progress.md&title=IN+PROGRESS: " + fullbookuri + "'target=_blank title='Report Text In Progress  - raise issue on GitHub'> <i class='fas fa-tasks bug' aria-hidden='true'></i></a>";
                    var completedText = "<a href='https://github.com/OpenITI/Annotation/issues/new?assignees=&labels=text+tagged&template=submission-report--for-pull-requests-.md&title=" + fullbookuri + "'target=_blank title='Report Text Tagged - raise issue on GitHub'> <i class='fas fa-tag bug'aria-hidden='true' ></i></a>";
                    var changeUri = "<a href ='https://github.com/OpenITI/Annotation/issues/new?assignees=&labels=enhancement&template=change-uri.md&title=" + fullbookuri + "' target=_blank title='Change URI - raise issue on GitHub'> <i class='fas fa-exchange-alt bug' aria-hidden='true'></i></a>"
                    var endtag = '</span>'
                    
                    return defaultLink + "<strong>Raise an issue/report: </strong> <br/>" + opentag +changeUri+ textQuality + completedText + inProgress + endtag

                    //return '<a href="' + data + '" target="_blank">Read the full text</a>' + "<span class='bugspan'> <a href ='https://github.com/OpenITI/Annotation/issues/new?assignees=&labels=text+quality&template=text-quality-issue-.md&title=" + fullbookuri + "' target=_blank title='Full Text Issue - raise issue on GitHub'> <i class='fas fa-bug bug'></i></a></span>";
                }


            },
            {
                "data": "tags",
                "render": function (data, type, row, meta) {
                    return data = data.replace(/,_|_|,/g, " <br/>")


                }
            },
            {
                "data": null,
                "render": function (data, type, row, meta) {
                    //console.log(meta.row);
                    var new_id = data['url'].split('/')[9].split('.')[2];
                    //console.log(new_id);

                    var srtsLinks = {
                        Oct17: 'http://dev.kitab-project.org/passim1017/' + data['id'],
                        Feb19: 'http://dev.kitab-project.org/passim01022019/' + new_id,
                        Aggregated: 'http://dev.kitab-project.org/aggregated01052019/' + new_id
                    }
                    if (type === 'rawExport') {
                        return srtsLinks;
                    }


                    srtContainer = '<div> <a href="' + srtsLinks.Oct17 + '" target="_blank"> October 2017 (V1) </a> <br/> <a href="'
                        + srtsLinks.Feb19 + '" target="_blank">Feburary 2019 (V2) </a> <br/><a href="'
                        + srtsLinks.Aggregated + '" target="_blank">May 2019 (Aggregated)</a> </div>'

                    return srtContainer
                }


            }
        ]

    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function getdata(response) {
        //console.log(response);
        return_first = response;
        
       // console.log(return_first.data);
        myData['rowCount']= return_first.data.length;
        myData['primaryBookCount'] = return_first.data.length;
        myData['primaryBooks'] = return_first.data.filter(function(data) {
           return data.status == "pri";
           
           
        });
       // myData.primaryBooks = Object.filter(myData, status => status ='pri');
       //console.log(JSON.stringify(myData.rowCount));
    }

    //var p = myData
    //console.log(myData);
    var p = myData;
    function fetch1(d){
        return c = d;

    }

    //myObj = fetch1(myData);
    //console.log(JSON.stringify(myObj.rowCount));

    //console.log(myData);
    
    //console.log(Object.keys(myData))
        //console.log('p:',p['rowCount'])

    // console.log("outside:  ", return_first)
    // console.log(totalRecords)

    // console.log(totalRecords)
    // $('#total').html(totalRecords)


});





