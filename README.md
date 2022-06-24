# OpenITI: a Machine-Readable Corpus of Islamicate Texts

<!--- **Suggested Citation for all versions:** Romanov, Maxim, and Masoumeh Seydi. “OpenITI: A Machine-Readable Corpus of Islamicate Texts.” Zenodo, 2019- [doi:10.5281/zenodo.3082463](https://doi.org/10.5281/zenodo.4075046).--->

**Suggested Citation for a specific version:** Please check the citation information of the corresponding version at [doi:10.5281/zenodo.3082463](https://doi.org/10.5281/zenodo.3082463).

**\*** **Note on Release Numbering**: Version **2019.1.1**—where **2019** is the year of the release, the first dotted number—**.1**—is the ordinal release number in 2019, and the second dotted number—**.1**—is the overall release number; the first dotted number will reset every year, while the second one will continue on increasing.

**Co-PIs**: Matthew Thomas Miller (University of Maryland, College Park), Maxim G. Romanov (University of Vienna), Sarah Bowen Savant (Aga Khan University—ISMC, London).

*Open Islamicate Texts Initiative* (**OpenITI**, see http://openiti.org/) is a multi-institutional effort to construct the first machine-actionable scholarly corpus of premodern Islamicate texts. Led by researchers at the Aga Khan University, Institute for the Study of Muslim Civilisations (AKU-ISMC), University of Vienna (UV), Leipzig University (LU), and the Roshan Institute for Persian Studies at the University of Maryland (College Park) and an interdisciplinary advisory board of leading digital humanists and Islamic, Persian, and Arabic studies scholars, OpenITI aims to provide the essential textual infrastructure in Arabic, Persian and other Islamicate languages for new forms of textual analysis and digital scholarship. In the process, OpenITI will enable new synergies between Digital Humanities and the inter-related Islamicate fields of Islamic, Persian, and Arabic Studies. In addition to support from the researchers’ home institutions, it is supported by funding from the [European Research Council](https://erc.europa.eu/) under the European Union’s Horizon 2020 research and innovation programme, awarded to the [KITAB](http://kitab-project.org/) project (Grant Agreement No. 772989, PI Sarah Bowen Savant) and the [Qatar National Library](https://www.qnl.qa/en).

Currently, **OpenITI** contains almost exclusively Arabic texts, which were first assembled into a corpus within the OpenArabic project, developed first at Tufts University (at *The Perseus Project*, 2013–2015) and then at Leipzig University (at the Alexander von Humboldt Chair for Digital Humanities, 2015–2017)—in both cases with the support and under the patronage of Prof. Gregory Crane. The much more limited number of Persian texts were compiled during 2015–2016 in the [Persian Digital Library (PDL) pilot](https://persdigumd.github.io/PDL/) at Roshan Institute for Persian Studies at the University of Maryland. These texts have not been made fully compatible with OpenITI mARkdown yet and will be made fully available in next releases.

In this repository, we publish OpenITI releases and the folder structure of each release is described in the latest release note. The releases will be published on Zenodo as well. To access a specific release, please use the Zenodo link, which is updated above on this page. To access a specific release through github, please use the corresponding [tag](https://github.com/OpenITI/RELEASE/tags) that points to the release number.

The most up-to-date detailed description of the **OpenITI** project can be found at [the website of the KITAB Project](https://kitab-project.org/docs/openITI). Detailed metadata on the **OpenITI** corpus can be found at <https://kitab-corpus-metadata.azurewebsites.net/>.



[comment]: <> (Link to Zenodo: <https://zenodo.org/record/3082464>)



# OpenITI, ver. 2022.1.6: Release Notes


# Corpus Metadata


The current release metadata is available in the `OpenITI_metadata_2022-1-6.csv` and `OpenITI_metadata_2022-1-6_merged.csv `(merged[^1] version)` `files.


# Folder Structure

* `data`: main data folder with _Author > Book > Versions_ structure;
* `metadata `
    * `OpenITI_metadata_2022-1-6.csv`: metadata file, with a row for each text in the corpus, including a row for each part of the multi-part books in the corpus;
    * `OpenITI_metadata_2022-1-6_merged.csv`: metadata file, with one row for each multi-part book in the corpus;
* `release_notes`
    * `OpenITI_release-notes_2022-1-6.pdf`: these release notes;
    * `release-notes_files_2022-1-6.zip`: csv files including the provided list of new changes in the current release (see the description of each file in this release notes).



# Corpus Statistics


<table>
  <tr>
   <td>
<strong>Category</strong>
   </td>
   <td><p style="text-align: right">
<strong>Stats</strong></p>

   </td>
  </tr>
  <tr>
   <td>Number of unique titles
   </td>
   <td><p style="text-align: right">
6,768</p>

   </td>
  </tr>
  <tr>
   <td>Number of authors
   </td>
   <td><p style="text-align: right">
2,832</p>

   </td>
  </tr>
  <tr>
   <td>Number of book titles (all versions/editions)
   </td>
   <td><p style="text-align: right">
11,177</p>

   </td>
  </tr>
  <tr>
   <td>Number of uncorrected OCRed texts[^2]
   </td>
   <td><p style="text-align: right">
246</p>

   </td>
  </tr>
</table>


## Length of texts (all books)


<table>
  <tr>
   <td><strong> </strong>
   </td>
   <td><p style="text-align: right">
<strong>Number of words</strong></p>

   </td>
   <td><p style="text-align: right">
<strong>Number of pages (300 w/p)</strong></p>

   </td>
  </tr>
  <tr>
   <td>Total
   </td>
   <td><p style="text-align: right">
2,249,885,657</p>

   </td>
   <td><p style="text-align: right">
7,499,619</p>

   </td>
  </tr>
  <tr>
   <td>Min.
   </td>
   <td><p style="text-align: right">
47</p>

   </td>
   <td><p style="text-align: right">
1</p>

   </td>
  </tr>
  <tr>
   <td>1st Qu.
   </td>
   <td><p style="text-align: right">
8,497</p>

   </td>
   <td><p style="text-align: right">
29</p>

   </td>
  </tr>
  <tr>
   <td>Median
   </td>
   <td><p style="text-align: right">
40,944</p>

   </td>
   <td><p style="text-align: right">
137</p>

   </td>
  </tr>
  <tr>
   <td>Mean
   </td>
   <td><p style="text-align: right">
201,297</p>

   </td>
   <td><p style="text-align: right">
671</p>

   </td>
  </tr>
  <tr>
   <td>3rd Qu.
   </td>
   <td><p style="text-align: right">
150,110</p>

   </td>
   <td><p style="text-align: right">
501</p>

   </td>
  </tr>
  <tr>
   <td>Max<em>.</em>
   </td>
   <td><p style="text-align: right">
11,912,693</p>

   </td>
   <td><p style="text-align: right">
39,709</p>

   </td>
  </tr>
</table>



## Length of texts (primary books)


<table>
  <tr>
   <td><p style="text-align: right">
 </p>

   </td>
   <td><p style="text-align: right">
Number of words</p>

   </td>
   <td><p style="text-align: right">
Number of pages (300 w/p)</p>

   </td>
  </tr>
  <tr>
   <td>Total
   </td>
   <td><p style="text-align: right">
1,079,709,426</p>

   </td>
   <td><p style="text-align: right">
3,599,032</p>

   </td>
  </tr>
  <tr>
   <td>Min.
   </td>
   <td><p style="text-align: right">
48</p>

   </td>
   <td><p style="text-align: right">
1</p>

   </td>
  </tr>
  <tr>
   <td>1st Qu.
   </td>
   <td><p style="text-align: right">
7,589</p>

   </td>
   <td><p style="text-align: right">
26</p>

   </td>
  </tr>
  <tr>
   <td>Median
   </td>
   <td><p style="text-align: right">
33,088</p>

   </td>
   <td><p style="text-align: right">
111</p>

   </td>
  </tr>
  <tr>
   <td>Mean
   </td>
   <td><p style="text-align: right">
159,532</p>

   </td>
   <td><p style="text-align: right">
532</p>

   </td>
  </tr>
  <tr>
   <td>3rd Qu.
   </td>
   <td><p style="text-align: right">
121,834</p>

   </td>
   <td><p style="text-align: right">
407</p>

   </td>
  </tr>
  <tr>
   <td>Max.
   </td>
   <td><p style="text-align: right">
11,912,693</p>

   </td>
   <td><p style="text-align: right">
39,709</p>

   </td>
  </tr>
</table>



## 
Annotation statistics


<table>
  <tr>
   <td><em>Number of texts with extension <code>.mARkdown</code></em>
   </td>
   <td><p style="text-align: right">
479</p>

   </td>
  </tr>
  <tr>
   <td><em>Number of texts with extension <code>.completed</code></em>
   </td>
   <td><p style="text-align: right">
630</p>

   </td>
  </tr>
  <tr>
   <td><em>Number of texts with extension <code>.inProgress</code></em>
   </td>
   <td><p style="text-align: right">
10</p>

   </td>
  </tr>
</table>



## 
Book Ids 


The list of the new book ids in this version is available in the `ids.csv` file. It includes the newly added book ids and modified ids. The URI includes the information of the new book (i.e., date, author, and book title).


## 
Modified URIs


List of modified URIs in the current release is available in `modified_uris.csv`. Changes typically affect such fields as year, author, and title. These changes are applied to the entire metadata (book IDs remain unchanged). 


## 
Annotation Update


The list of texts that have been structurally annotated or where the annotation has changed (can be tracked by the file extensions) since our previous release (version [2021.2.5](https://zenodo.org/record/5550338)) is provided in `annotation_update.csv`. This file shows URIs of texts together with their current extension, which is a part of the `local_path` in the metadata file.


For more information on the OpenITI mARkdown and the extensions please see [here](https://maximromanov.github.io/mARkdown/).


# Credits


## Current contributors (_alphabetically_):



* Sohail Merchant (_metadata app_)
* Lorenz Nigst (_corpus management; structural annotation_)
* Maxim Romanov (_OpenITI co-PI; EIS1600 Project PI; conceptual development; mARkdown_)
* Sarah Bowen Savant (_OpenITI co-PI; KITAB Project PI_)
* Masoumeh Seydi (_technical development_)
* Peter Verkinderen (_technical development; preparing new texts for the corpus; structural annotation_)
* Mathew Barber (_structural annotation_)
* Gowaart Van Den Bossche (_structural annotation_)
* Hamidreza Hakimi (_structural annotation_)
* Simon Loynes (_structural annotation_)
* Aslisho Qurboniev (_structural annotation_)


## Past contributors:



* Maroussia Bednarkiewicz (_structural annotation_)
* Christoph Gümmer (_structural annotation_)
* Jonas Köpsel (_structural annotation_)
* Cornelis [Eric] Van Lit (_structural annotation_)
* Cornelia Neubauer (_structural annotation_)
* Leonie Nückell (_structural annotation_)
* Fatemeh Shams (_structural annotation_)

<!-- Footnotes themselves at the bottom. -->

## Notes

[^1]:
     The corpus contains a number of texts that are too big for GitHub and had to be split into multiple files (currently only two versions of the book _Biḥār al-anwār_ (`1111Majlisi.BiharAnwar`)). The metadata file contains statistics on each part of this split text. We also provide a separate metadata file in which the statistics for the separate parts of those books that have been merged. Since the merged metadata for these split files does not refer to an existing file, the `local_path` field for these virtual texts will be “NA”.

[^2]:
<p>
     The uncorrected OCRed texts are specified by the “UNCORRECTED_OCR” tag in the “tags” column of the metadata files. 
     

