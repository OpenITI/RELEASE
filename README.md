# OpenITI: a Machine-Readable Corpus of Islamicate Texts

**Suggested Citation for all versions:** Maxim Romanov, and Masoumeh Seydi. 2019. “OpenITI: A Machine-Readable Corpus of Islamicate Texts”. Zenodo. [doi:10.5281/zenodo.3082463](https://doi.org/10.5281/zenodo.3082463).

**Suggested Citation for a specific version:** Please check the citation information of the corresponding version at the above link.

**\*** **Note on Release Numbering**: Version **2019.1.1**—where **2019** is the year of the release, the first dotted number—**.1**—is the ordinal release number in 2019, and the second dotted number—**.1**—is the overall release number; the first dotted number will reset every year, while the second one will continue on increasing.

**Co-PIs**: Matthew Thomas Miller (University of Maryland, College Park), Maxim G. Romanov (University of Vienna), Sarah Bowen Savant (Aga Khan University—ISMC, London).

*Open Islamicate Texts Initiative* (**OpenITI**, see <https://openiti.github.io/>) is a multi-institutional effort to construct the first machine-actionable scholarly corpus of premodern Islamicate texts. Led by researchers at the Aga Khan University, Institute for the Study of Muslim Civilisations (AKU-ISMC), University of Vienna (UV), Leipzig University (LU), and the Roshan Institute for Persian Studies at the University of Maryland (College Park) and an interdisciplinary advisory board of leading digital humanists and Islamic, Persian, and Arabic studies scholars, OpenITI aims to provide the essential textual infrastructure in Arabic, Persian and other Islamicate languages for new forms of textual analysis and digital scholarship. In the process, OpenITI will enable new synergies between Digital Humanities and the inter-related Islamicate fields of Islamic, Persian, and Arabic Studies. In addition to support from the researchers’ home institutions, it is supported by funding from the [European Research Council](https://erc.europa.eu/) under the European Union’s Horizon 2020 research and innovation programme, awarded to the [KITAB](http://kitab-project.org/) project (Grant Agreement No. 772989, PI Sarah Bowen Savant) and the [Qatar National Library](https://www.qnl.qa/en).

Currently, **OpenITI** contains almost exclusively Arabic texts, which were first assembled into a corpus within the OpenArabic project, developed first at Tufts University (at *The Perseus Project*, 2013–2015) and then at Leipzig University (at the Alexander von Humboldt Chair for Digital Humanities, 2015–2017)—in both cases with the support and under the patronage of Prof. Gregory Crane. The much more limited number of Persian texts were compiled during 2015–2016 in the [Persian Digital Library (PDL) pilot](https://persdigumd.github.io/PDL/) at Roshan Institute for Persian Studies at the University of Maryland. These texts have not been made fully compatible with OpenITI mARkdown yet and will be made fully available in next releases.

In this repository, we publish OpenITI releases and the folder structure of each release is described in the latest release note. The releases will be published on Zenodo as well. To access a specific release, please use the Zenodo link, which is updated above on this page. To access a specific release through github, please use the corresponding [tag](https://github.com/OpenITI/RELEASE/tags) that points to the release number.

## General Description

The goal of the **OpenITI** is to build a machine-actionable corpus of premodern texts in Islamicate languages to encourage computational analysis of the Islamicate written tradition. Most of the Arabic texts have been collected from open-access online collections of premodern and modern Arabic texts such as [al-Maktabaŧ al-Šāmilaŧ](http://shamela.ws/) and [Maktabaŧ al-Šīʿaŧ](http://shiaonlinelibrary.com/). These texts have `Shamela+NUMBER` and `Shia+NUMBER` IDs; some texts come from al-Jāmiʿ al-kabīr, which has been published on an external HDD and is not available online (`JK+NUMBER`). Below is the list of IDs that you currently find in the OpenITI releases according to the source collection. The list will be updated according to the changes in the future releases. Initial metadata from these collections is preserved at the beginning of each file.

| ID      |                                               Full name of the collection                                               |
|---------|:-----------------------------------------------------------------------------------------------------------------------:|
| JK      | al-Jāmiʿ al-kabīr                                                                                                       |
| Sham30K | al-Maktabaŧ al-Šāmilaŧ, official version + additional texts, downloaded from https://archive.org/details/SHAMELH30-1-20 |
| Shamela | al-Maktabaŧ al-Šāmilaŧ, www.shamela.ws                                                                                  |
| Shia    | Maktabaŧ al-Šīʿaŧ, http://shiaonlinelibrary.com                                                                         |


Currently uploaded texts have been automatically converted into the OpenITI mARkdown format—a flavor of markdown that was developed for tagging premodern Islamicate texts. All of our texts require further editing to properly tag their structure. A detailed description of the mARkdown scheme and the tagging workflow can be found in the [**OpenITI mARkdown section**](https://maximromanov.github.io/mARkdown/). When manual tagging is complete the texts will be converted into a CTS-compliant XML format.

## File extensions

Text files in each release are provided in the "data" folder. The folder has Author > Book > Versions structure. The book files includes the following extensions:

- **[no extension]**: This is a RAW file, automatically converted from its initial format to be as close to the **OpenITI mARkdown** format as possible. **NB:** Since the corpus is a work in progress and many texts have not yet been manually edited, tags that may appear in texts do not necessarily correspond to the proper **OpenITI mARkdown** scheme!
- **\*.inProgress**: The annotation of the file is in-progress.
- **\*.completed**: The conversion of the file is completed, but the file still requires final verification and vetting.
- **\*.mARkdown**: The file has been verified and vetted.
- **\*.yml**: For each RAW text file ([no extension]) there is a **.yml** file with the same name that contains the file metadata. 


In the long run we envision that the entire corpus will be converted into TEI XML and made available to a wider public as a digital library.

## Corpus metadata

Each release has a metadata file in TSV format, named as the release number (e.g., "OpenITI_metadata_2020_1_2"). The file contains general information about the books and authors, such as title, length in Arabic tokens and characters, URI, book unique identifiers, tags. The description of the metadata file for each release is provided in the corresponding release note. To facilitate the search functionality, the corpus team has developed an [application](https://github.com/OpenITI/release_metadata_html) in which the release data can used to produce an HTML view of the metadata.

For more information on OpenITI, see [here](https://maximromanov.github.io/OpenITI/).

<!---
### Chronological Distribution of Texts
![alt text](https://github.com/OpenITI/2019.1/blob/master/chrono_img.png?raw=true)
--->


[comment]: <> (Link to Zenodo: <https://zenodo.org/record/3082464>)

