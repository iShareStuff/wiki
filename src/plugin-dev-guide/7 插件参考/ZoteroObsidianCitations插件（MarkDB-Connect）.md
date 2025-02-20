ZoteroObsidianCitations插件（MarkDB-Connect）

[插件官网](https://github.com/daeh/zotero-markdb-connect)

# 插件说明

- *Scans your Markdown database and adds a colored tag to associated* *Zotero* *items.*
- *Jump to Markdown notes from the contextual menu of* *Zotero* *items.*
- *Supports various Markdown databases, including* [Obsidian](https://obsidian.md/)*,* [logseq](https://logseq.com/)*, and* [Zettlr](https://www.zettlr.com/)

This is a plugin for [Zotero](https://www.zotero.org/), a research source management tool. The *MarkDB-Connect* plugin searches a user-defined folder for markdown files that include a [Better BibTeX](https://retorque.re/zotero-better-bibtex/) citekey or Zotero-Item-Key, and adds a colored tag to the corresponding Zotero items.

This plugin was initially designed with the [Obsidian](https://obsidian.md/) markdown editor in mind, and was inspired by the [obsidian-citation-plugin](https://github.com/hans/obsidian-citation-plugin) workflow. It offers preliminary support for [logseq](https://logseq.com/) and [Zettlr](https://www.zettlr.com/). It can be adapted to other databases that store markdown files outside of Zotero, and to other workflows that generate markdown reading notes linked to Zotero items (such as Zotero's Export Note feature).

Please post any bugs, questions, or feature requests in the Github repository.

# 如何使用

## Plugin Functions

Adds a colored tag to Zotero items for which there are associated reading notes in an external folder.

Supports multiple markdown files for a single Zotero item.

Opens an existing markdown note in [Obsidian](https://obsidian.md/), [logseq](https://logseq.com/), or the system's default markdown note editor (e.g. [Zettlr](https://www.zettlr.com/), [Typora](https://typora.io/)) from the contextual menu of a Zotero item.

<img src="https://cdn.nlark.com/yuque/0/2022/png/32594373/1662264442891-2ee770e0-031b-4837-a25e-637965ceb622.png" width="626" id="uc4c25085" class="ne-image">

## Instalation

- Download the plugin (the .xpi file) from the latest release: https://github.com/daeh/zotero-markdb-connect/releases
- To download the .xpi file, right click it and select 'Save link as'
- Run Zotero (version 5.x or 6.x)
- Go to Tools -> Add-ons
- Install Add-on From File
- Choose the file MarkDBConnect-0.0.18.xpi
- Restart Zotero

## Setup

A markdown file can specify which Zotero item it's linked to using either a [Better BibTeX](https://retorque.re/zotero-better-bibtex/) citekey or a Zotero-Item-Key. I recommend using Better BibTeX citekeys when possible.

1.  Using Better BibTeX citekeys to link markdown files to Zotero items.

1.  This is recommended if you created the markdown notes with [obsidian-citation-plugin](https://github.com/hans/obsidian-citation-plugin).
2.  The BetterBibTeX citekey needs to appear in the filename or the metadata of the markdown note.

2.  Using Zotero Item Keys to link markdown files to Zotero items.

1.  This is recommended if you created the markdown notes with the Export Note feature of Zotero.
2.  The markdown note contents should include the Zotero-Item-Key in a consistent format.

NOTE: multiple markdown files can point to the same Zotero item. However, *MarkDB-Connect* assumes that a given markdown file corresponds to a single Zotero item. (A markdown reading note can reference multiple Zotero items throughout the file, but *MarkDB-Connect* will only link the markdown note to one BetterBibTeX-citekey / Zotero-Item-Key.)

### Option 1: Using BetterBibTeX citekeys

*MarkDB-Connect* can extract the BetterBibTeX citekey that specifies which Zotero Item a markdown note corresponds to. The BetterBibTeX citekey can be taken from the markdown filename or yaml metadata.

- In MarkDBConnect Preferences... (under the Tools menu),

- Specify the location of the folder that contains your markdown reading notes (e.g. /Users/me/Documents/ObsVault/ReadingNotes/). The *MarkDB-Connect* plugin will recursively search this path for markdown files.

- The default behavior is to search for markdown files beginning with @.
- Alternatively, you can specify a RegEx pattern to match your reading note files.

- Select the Match notes based on BetterBibTeX citekey option.

- By default, *MarkDB-Connect* expects that the filenames of your markdown reading note files begin with @mycitekey but can include extra information after it (e.g. a reading note with the BetterBibTeX citekey shepard1987science could have the file name @shepard1987science.md or @shepard1987science Toward a universal law of generalization for psychological science.md).

- Optionally, you can have *MarkDB-Connect* read the metadata of your markdown notes and extract the citekey from one of the fields. To enable this, specify the metadata ID (citekey is a common value).

- This is necessary if the file names do not begin with the correct citekey, which may happen if the citekeys include special characters (e.g. if a citekey contains :, it will probably need to be taken from the yaml metadata rather than the filename).

- Run the synchronization function from Tools -> MarkDBConnect Sync Tags.

- This will add a tag (ObsCite) to every Zotero item for which there exists a reading note in the external folder you specified.

- In the Tags plane of Zotero, right-click on the ObsCite tag and assign it a color, which will mark the tagged items in the preview plane of Zotero.

### Option 2: Using Zotero Item Keys

*MarkDB-Connect* can extract the Zotero-Item-Key that specifies which Zotero Item a markdown note corresponds to. The Zotero-Item-Key is taken from the markdown file contents using a custom RegEx pattern.

Zotero automatically generates Item Keys, they take the form of ABCD1234, as in zotero://select/library/items/ABCD1234. NB this is not the same as the BetterBibTeX citekey you assigned an item (e.g. mycitekey in zotero://select/items/@mycitekey).

- In MarkDBConnect Preferences... (under the Tools menu),

- Specify the location of the folder that contains your markdown reading notes (e.g. /Users/me/Documents/ObsVault/ReadingNotes/). The *MarkDB-Connect* plugin will recursively search this path for markdown files.

- The default behavior is to search for markdown files beginning with @.
- Alternatively, you can specify a RegEx pattern to match your reading note files.

- Select the Match notes based on Zotero-Item-Key option.
- Specify a RegEx pattern to extract the Zotero-Item-Key from the markdown contents.
- E.g. if your note has the line
- \- local:: \[local zotero\](zotero://select/library/items/GZ9DQ2AM)
- you could extract the Zotero key (GZ9DQ2AM) using this RegEx pattern:
- ^\- local::.+\\/items\\/(\\w+)\\)

- Run the synchronization function from Tools -> MarkDBConnect Sync Tags.

- This will add a tag (ObsCite) to every Zotero item for which there exists a reading note in the external folder you specified.

- In the Tags plane of Zotero, right-click on the ObsCite tag and assign it a color, which will mark the tagged items in the preview plane of Zotero.

## Example Markdown Note

In this example markdown note (@saxe2017emobtom.md), the *MarkDB-Connect* will use the yaml metadata keyword citekey to find the BetterBibTeX citekey (saxe2017emobtom) to determine which Zotero item to associate with the markdown file. Notice that the markdown file can include other BetterBibTeX citekeys and Zotero-Item-Keys, which are ignored by the plugin.

---citekey: saxe2017emobtomzoterouri: zotero://select/library/items/IACZMXU4bbturi: zotero://select/items/@saxe2017emobtomdoi: 10.1016/j.copsyc.2017.04.019

\-\-\-**\# Formalizing emotion concepts within a Bayesian model of theory of mind** \[A reference to another paper using a Zotero URI\](zotero://select/library/items/4RJ97IFL) \[A reference to another paper using a BetterBibTeX URI\](zotero://select/items/@anzellotti2021opaque) A reference to another paper using an Obsidian wiki link: \[\[@cusimano2018cogsci\]\]

## Related Projects

- [obsidian-citation-plugin](https://github.com/hans/obsidian-citation-plugin) by hans

- Obsidian plugin that integrates your Zotero database with Obsidian.

- [BibNotes Formatter](https://github.com/stefanopagliari/bibnotes) by stefanopagliari

- Obsidian plugin to facilitate exporting annotations from Zotero into Obsidian.

- [Obsidian Zotero Integration](https://github.com/mgmeyers/obsidian-zotero-integration) by mgmeyers

- Obsidian plugin to facilitate exporting annotations from Zotero into Obsidian.

- [Zotero 6 'Export Notes' feature](https://forums.zotero.org/discussion/93521/available-for-beta-testing-markdown-export-of-notes/p1) by Zotero

- Zotero 6 beta feature to export notes and annotations from Zotero items as markdown files.

- [Zotero-mdnotes](https://argentinaos.com/zotero-mdnotes/) by argenos

- Zotero plugin to export metadata and notes from Zotero items as markdown files.

- [Zotero to Markdown](https://github.com/e-alizadeh/Zotero2md) by e-alizadeh

- Python library to export annotations and notes from Zotero items as markdown files.

* * *

* * *

* * *