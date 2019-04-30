# OpenITI, ver. 2019.1(1)<sup>1</sup>—Release Notes

_Open Islamicate Texts Initiative_ ( **OpenITI** , see [https://openiti.github.io/](https://openiti.github.io/)) is a multi-institutional effort to construct the first machine-actionable scholarly corpus of premodern Islamicate texts. Led by researchers at the Aga Khan University (AKU), University of Vienna (UV), Leipzig University (LU), and the Roshan Institute for Persian Studies at the University of Maryland (College Park) and an interdisciplinary advisory board of leading digital humanists and Islamic, Persian, and Arabic studies scholars, **OpenITI** aims to provide the essential textual infrastructure in Arabic, Persian and other Islamicate languages for new forms of textual analysis and digital scholarship. In the process, **OpenITI** will enable new synergies between Digital Humanities and the inter-related Islamicate fields of Islamic, Persian, and Arabic Studies. In addition to support from the researchers&#39; home institutions, it is supported by funding from the European Research Council and the Qatar National Library.

Currently, **OpenITI** contains almost exclusively Arabic texts, which were first assembled into a corpus within the **OpenArabic** project, developed first at Tufts University (at _The Perseus Project_, 2013–2015) and then at Leipzig University (at the Alexander von Humboldt Chair for Digital Humanities, 2015–2017)—in both cases with the support and under the patronage of Prof. Gregory Crane. The much more limited number of Persian texts were compiled during 2015-2016 in the Persian Digital Library (PDL) pilot (see: [https://persdigumd.github.io/PDL/](https://persdigumd.github.io/PDL/)) at Roshan Institute for Persian Studies at the University of Maryland. These texts have not been made fully compatible with OpenITI mARkdown yet, but are available in the OpenITI repository in TEI-XML (these texts will be made fully available in next releases).

## Corpus Metadata

Machine-readable metadata on the corpus is available in the &quot;OpenITI\_metadata\_2019\_1\_1&quot; file in TSV format, including the following columns:

1. **versionUri** : a human-readable URI of the current version of the book including the date of the death of the author, author&#39;s name, book name, ID of the original source (online library) where the source comes from, and the collection to which the source belongs to in the OpenITI corpus. URIs were deliberately made human-readable to make it easier to work with the corpus. Examples of URIs and the description of URI formation principles can be found at [https://maximromanov.github.io/OpenITI/#cts-compliant-naming-pattern](https://maximromanov.github.io/OpenITI/#cts-compliant-naming-pattern).
2. **date** : Date of death of the author (_hijrī_, from versionURI)
3. **author** : Name of the author (from versionURI)
4. **book** : Book title (from versionURI)
5. **id** : Book id, which originally comes from the collection the source is taken from (from versionURI)
6. **status** : pri/sec — &quot;pri&quot; value can be used to select only unique titles from the corpus (i.e., excluding versions of the same title)
7. **length:** length in words
8. **url:** link to the text on github
9. **tags:** genre/subject tags aggregated from the metadata of original collections (partially unified)
10. **localPath:** local path to the text in the OpenITI folder structure

## General Description

The goal of the **OpenITI** is to build a machine-actionable corpus of premodern texts in Islamicate languages to encourage computational analysis of the Islamicate written tradition. Most of the Arabic texts have been collected from open-access online collections of premodern and modern Arabic texts such as [http://shamela.ws/](http://shamela.ws/) and [http://shiaonlinelibrary.com/](http://shiaonlinelibrary.com/) (These texts have Shamela+NUMBER and Shia+NUMBER; some texts come from _al-Jāmiʿ al-kabīr_, which has been published on an external HDD and is not available online (JK+NUMBER). Initial metadata from these collections is preserved at the beginning of each file. (The next release will include a number of Persian texts (primarily from the Ganjoor digital library, [https://ganjoor.net/](https://ganjoor.net/))).

Currently uploaded texts have been automatically converted into the OpenITI mARkdown format—a flavor of markdown that was developed for tagging premodern Islamicate texts. All of our texts require further editing to properly tag their structure. A detailed description of the mARkdown scheme and the tagging workflow can be found in the **OpenITI mARkdown section** ([https://maximromanov.github.io/mARkdown/](https://maximromanov.github.io/mARkdown/)). When manual tagging is complete the texts will be converted into a CTS-compliant XML format.

## File extensions

The current version includes the following file extensions:

- **[no extension]**: This is a RAW file, automatically converted from its initial format to be as close to the **OpenITI mARkdown** format as possible. **NB:** Since the corpus is a work in progress and many texts have not yet been manually edited, tags that may appear in texts do not necessarily correspond to the proper **OpenITI mARkdown** scheme!
- **\*.completed** : The conversion of the file is completed, but the file still requires final verification and vetting.
- **\*.mARkdown** : The file has been verified and vetted. 

In the long run we envision that the entire corpus will be converted into TEI XML and made available to a wider public as a digital library.

## Statistics on the corpus

| **Category** | **Stats** |
| --- | --- |
| Number of titles (with all versions/editions) | 7,144 |
| Number of unique titles | 4,288 |
| Number of authors | 1,859 |
| Length in words (all) | 1,520,667,360 |
| Length in pages (300 w/p) | 5,068,891 |
| Length in words (unique) | 755,689,541 |
| Length in pages (unique; 300 w/p) | 2,518,965 |

### Lengths of texts

|  | **Words** | **Pages (300 w/p)** |
| --- | --- | --- |
| _Min._ | 150 | 0 |
| _1st Qu._ | 32,700 | 109 |
| _Median_ | 105,300 | 351 |
| _Mean_ | 306,700 | 1,022 |
| _3rd Qu._ | 266,700 | 889 |
| _Max._ | 10,410,000 | 34,700 |

### Chronological Distribution of Texts

 ![alt text](https://raw.githubusercontent.com/OpenITI/2019.1/master/chrono_img.png?token=AAQGNBGVDUKUG2JWZUZBVFK42GOOI)

For more information on OpenITI, see [https://maximromanov.github.io/OpenITI/](https://maximromanov.github.io/OpenITI/). To access the current release see [https://github.com/OpenITI/2019.1](https://github.com/OpenITI/2019.1).

**Folder structure:**

OpenITI (main folder)

- `data`:
  - main data folder containing subfolders (Author > Book > Versions)
- `README.md`: release notes
- `OpenITI_metatda_2019_1_1`: metadata file



#
<sup>1</sup> Version **2019.1(1)**—where **2019** is the year of the release, **.1** is the ordinal release number in **2019** , and **(1)** is the overall release number; **.1** will reset every year, while **(1)** will continue on increasing.
