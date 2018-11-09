// set variables for easy color management
  base="#343D46"

  baseHL="#434c5e";
  baseHL0="#434c5e70";
  baseHL1="#434c5e40";

  baseSH0= "#23292e";
  baseSH1="#1d1e22";

  shadow = "#00000070"
  shadow2 = "#00000040";
  
  highlight0 = "#ffffffdd";
  highlight1 = "#ffffff70";
  highlight2= "#ffffff30"
  highlight3="#ffffff10";

  white0= "#ffffff";

  green0 = "#A3CE9E";
  green1 = "#A3CE9E70";
  green2 = "#A3CE9E40";

  teal0= "#5fb3b3";
  teal1= "#5fb3b370";

  lightBlue0 = "#92b0ce";

  blue0= "#6699cc";
  blue1= "#6699cc70";

  lightYellow0= "#ebcb8b";
  yellow0= "#FAB763";
  yellow1= "#FAB76370";
  yellow2= "#FAB76340";
  orangeRed="#FA8763";
  red0="#EE6A6F";
  red1="#EE6A6Fcc"
  red2="#EE6A6F40";

  purple0= "#c594c5";


// exportable json via `gulp`
module.exports = {
    "name": "Mariana (Pro)",
    "type": "dark",
    "colors": {
      // COLOR REFERENCE: https://code.visualstudio.com/docs/getstarted/theme-color-reference
  
      //  BASE COLORS
      "focusBorder":shadow2,
      "foreground": highlight0,
      "selection.background": highlight2,
      "widget.shadow":shadow2,
  
      // TEXT COLORS - Colors inside a text document, such as the welcome page.
      "textLink.activeForeground":  blue0,
      "textLink.foreground":  blue0,
      "textPreformat.foreground": blue0,
  
      // BUTTON CONTROL - A set of colors for button widgets such as Open Folder button in the Explorer of a new window.
      "button.background":  blue0,
      "button.foreground": white0,
      "button.hoverBackground": blue1,
  
      // DROPDOWN CONTROL - A set of colors for all dropdown widgets such as in the Integrated Terminal or the Output panel. Note that the dropdown control is not used on macOS currently.
      "dropdown.background": baseSH0,
      "dropdown.listBackground": baseSH0,
  
      // INPUT CONTROL - Colors for input controls such as in the Search view or the Find/Replace dialog.
      "input.background": base,
      "input.border": base,
      "input.foreground": highlight0,
      "input.placeholderForeground": highlight1,
  
      // SCROLL BAR CONTROL - Colors for input controls such as in the Search view or the Find/Replace dialog.
      "scrollbar.shadow": shadow,
      "scrollbarSlider.activeBackground": highlight2,
      "scrollbarSlider.background": highlight3,
      "scrollbarSlider.hoverBackground": highlight2,
  
      // BADGE - Badges are small information labels, for example, search results count.
      "badge.foreground": white0,
      "badge.background": red1,
  
      // PROGRESS BAR
      "progressBar.background": baseSH0,
  
      // LIST AND TREES - Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not.
      "list.activeSelectionBackground": baseHL0,
      "list.activeSelectionForeground": highlight0,
      "list.inactiveSelectionBackground": baseHL1,
      "list.inactiveSelectionForeground": highlight0,
      "list.hoverForeground": highlight0,
      "list.focusForeground": highlight0,
      "list.focusBackground": baseHL0,
      "list.hoverBackground": baseHL1,
      "list.dropBackground": baseHL,
      "list.highlightForeground": white0,
      "list.errorForeground": red0,
      "list.warningForeground": yellow0,
  
      // ACTIVITY BAR - The Activity Bar is displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar
      "activityBar.background": baseSH0,
      "activityBar.dropBackground": base,
      "activityBar.foreground": highlight0,
      // "activityBar.border":shadow2,
      "activityBarBadge.background": red1,
      "activityBarBadge.foreground": white0,
  
      // SIDE BAR - The Side Bar contains views like the Explorer and Search.
      "sideBar.background": baseSH0,
      "sideBar.foreground": highlight0,
      // "sideBar.border":shadow2,
      "sideBarSectionHeader.background": baseSH1,
      "sideBarSectionHeader.foreground": highlight0,
      "sideBarTitle.foreground": highlight0,
  
      // EDITOR GROUPS & TABS - Editor Groups are the containers of editors. There can be up to three editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.,
      "editorGroup.border":shadow2,
      "editorGroup.dropBackground": baseSH0,
      "editorGroupHeader.noTabsBackground": baseSH0,
      "editorGroupHeader.tabsBackground": baseSH0,
      // "editorGroupHeader.tabsBorder":shadow2,
      "tab.activeBackground": base,
      "tab.activeForeground": highlight0,
      "tab.border": highlight3,
      "tab.activeBorder": base,
      "tab.unfocusedActiveBorder": base,
      "tab.inactiveBackground": baseHL1,
      "tab.inactiveForeground": highlight1,
      "tab.unfocusedActiveForeground": highlight1,
      "tab.unfocusedInactiveForeground": highlight1,
  
      // EDITOR COLOR - The most prominent editor colors are the token colors used for syntax highlighting and are based on the language grammar installed.
      "editor.background": base,
      "editor.foreground": highlight0,
  
      "editor.hoverHighlightBackground": baseHL0,
      "editor.findMatchBackground": baseHL0,
      "editor.findMatchHighlightBackground": baseHL0,
      "editor.findRangeHighlightBackground": baseHL0,
      "editor.lineHighlightBackground": baseHL0,
      "editor.lineHighlightBorder": baseHL0,
      "editor.inactiveSelectionBackground": baseHL0,
      "editor.selectionBackground": baseHL0,
      "editor.selectionHighlightBackground": baseHL0,
      "editor.rangeHighlightBackground": baseHL0,
      "editor.wordHighlightBackground": baseHL0,
      "editor.wordHighlightStrongBackground": baseHL0,
  
      "editorError.foreground": red0,
      "editorError.border": red0,
      "editorWarning.foreground": yellow0,
      "editorInfo.foreground": green0,
      "editorWarning.border": lightYellow0,
      "editorCursor.foreground": highlight0,
      "editorIndentGuide.background": baseHL,
      "editorLineNumber.foreground": baseHL,
      "editorWhitespace.foreground": teal1,
  
      "editorOverviewRuler.border": baseHL,
      "editorOverviewRuler.currentContentForeground": baseHL,
      "editorOverviewRuler.incomingContentForeground": baseHL,
      "editorOverviewRuler.findMatchForeground": highlight2,
      "editorOverviewRuler.rangeHighlightForeground": highlight2,
      "editorOverviewRuler.selectionHighlightForeground": highlight2,
      "editorOverviewRuler.wordHighlightForeground": highlight2,
      "editorOverviewRuler.wordHighlightStrongForeground": highlight2,
      "editorOverviewRuler.modifiedForeground": lightYellow0,
      "editorOverviewRuler.addedForeground": green0,
      "editorOverviewRuler.deletedForeground": red0,
      "editorOverviewRuler.errorForeground": red0,
      "editorOverviewRuler.warningForeground": lightYellow0,
      "editorOverviewRuler.infoForeground": highlight2,
      "editorOverviewRuler.bracketMatchForeground": highlight2,
  
      "editorGutter.modifiedBackground": lightYellow0,
      "editorGutter.addedBackground": green0,
      "editorGutter.deletedBackground": red0,
  
      // DIFF EDITOR COLORS - For coloring inserted and removed text, use either a background or a border color but not both.
      "diffEditor.insertedTextBackground": green2,
      "diffEditor.removedTextBackground": red2,
  
      // EDITOR WIDGET COLORS - The Editor widget is shown in front of the editor content. Examples are the Find/Replace dialog, the suggestion widget, and the editor hover.
      "editorWidget.background": baseSH0,
      "editorWidget.border": shadow,
      "editorSuggestWidget.background": baseSH0,
  
      // PEEK VIEW COLORS - Peek views are used to show references and declarations as a view inside the editor.
      "peekViewResult.background": base,
      "peekViewTitle.background": baseSH0,
  
      // MERGE CONFLICTS - Merge conflict decorations are shown when the editor contains special diff ranges.
      "merge.currentHeaderBackground": yellow1,
      "merge.currentContentBackground": yellow2,
      "merge.incomingHeaderBackground": green1,
      "merge.incomingContentBackground": green2,
  
      // PANEL COLORS - Panels are shown below the editor area and contain views like Output and Integrated Terminal.
      "panel.background": baseSH1,
      "panel.border":shadow2,
      "panelTitle.activeBorder":  blue0,
  
      // STATUS BAR COLORS - The Status Bar is shown in the bottom of the workbench.
      "statusBar.background": baseSH1,
      "statusBar.debuggingBackground":  blue0,
      "statusBar.debuggingForeground": highlight0,
      "statusBar.noFolderForeground": highlight0,
      "statusBar.noFolderBackground": baseHL,
      "statusBar.foreground": highlight0,
      "statusBarItem.activeBackground": baseHL,
      "statusBarItem.hoverBackground": baseHL1,
      "statusBarItem.prominentBackground": baseHL,
      "statusBarItem.prominentHoverBackground": baseHL1,
      "statusBar.border": highlight3,
  
      // TITLE BAR COLORS - Note: These colors are currently only supported on macOS.
      "titleBar.activeBackground": baseSH0,
      "titleBar.activeForeground": highlight0,
      // "titleBar.border":shadow2,
      "titleBar.inactiveBackground": baseSH0,
      "titleBar.inactiveForeground": highlight1,
  
      // NOTIFICATION COLORS
      "notificationCenterHeader.foreground": highlight0,
      "notificationCenterHeader.background": baseSH0,
  
      // EXTENSIONS
      "extensionButton.prominentForeground": white0,
      "extensionButton.prominentBackground":  blue0,
      "extensionButton.prominentHoverBackground": blue1,
  
      // QUICK PICKER
      "pickerGroup.border": blue0,
      "pickerGroup.foreground": blue0,
  
      // INTEGRATED TERMINAL COLORS
      "terminal.ansiBrightBlack": highlight0,
      "terminal.ansiBlack": highlight0,
      "terminal.ansiBlue":  blue0,
      "terminal.ansiBrightBlue":  blue0,
      "terminal.ansiBrightCyan":  blue0,
      "terminal.ansiCyan":  blue0,
      "terminal.ansiBrightMagenta": purple0,
      "terminal.ansiMagenta": purple0,
      "terminal.ansiBrightRed": red0,
      "terminal.ansiRed": red0,
      "terminal.ansiYellow": yellow0,
      "terminal.ansiBrightYellow": yellow0,
      "terminal.ansiBrightGreen": green0,
      "terminal.ansiGreen": green0,
      "terminal.ansiWhite": highlight0,
      "terminal.selectionBackground": highlight2,
      "terminalCursor.background": highlight2,
      "terminalCursor.foreground": highlight0,
  
      // GIT COLORS
      "gitDecoration.modifiedResourceForeground": lightYellow0,
      "gitDecoration.deletedResourceForeground": red0,
      "gitDecoration.untrackedResourceForeground": highlight1,
      "gitDecoration.conflictingResourceForeground": red0,
      "gitDecoration.submoduleResourceForeground": highlight1
  
      // BREADCRUMBS - The theme colors for breadcrumbs navigation
      // "breadcrumb.foreground": white0,
      // "breadcrumb.focusForeground": white0,
      // "breadcrumb.activeSelectionForeground": white0,
      // "breadcrumbPicker.background": shadow,
    },
    "tokenColors": [
      {
        "name": "Comment",
        "scope": ["comment", "punctuation.definition.comment"],
        "settings": {
          "foreground": highlight1
        }
      },
      {
        "name": "String",
        "scope": "string",
        "settings": {
          "foreground": green0
        }
      },
      {
        "name": "Punctuation",
        "scope": ["punctuation.definition"],
        "settings": {
          "foreground": teal0
        }
      },
      {
        "name": "Number",
        "scope": "constant.numeric",
        "settings": {
          "foreground": yellow0
        }
      },
      {
        "name": "Built-in constant",
        "scope": "constant.language",
        "settings": {
          "fontStyle": "italic",
          "foreground": red0
        }
      },
      {
        "name": "User-defined constant",
        "scope": ["constant.character", "constant.other"],
        "settings": {
          "foreground": purple0
        }
      },
      {
        "name": "Member Variable",
        "scope": "variable.member",
        "settings": {
          "foreground": red0
        }
      },
      {
        "name": "Keyword",
        "scope": [
          "keyword - keyword.operator",
          "keyword.operator.word",
          "keyword.control",
          "keyword.operator.new.js"
        ],
        "settings": {
          "foreground": purple0
        }
      },
      {
        "name": "Embedded Line Template Line JS",
        "scope": "string.template.js meta.template.expression.js meta.embedded.line.js",
        "settings": {
          "foreground": highlight0
        }
      },
      {
        "name": "Operators",
        "scope": "keyword.operator",
        "settings": {
          "foreground": orangeRed
        }
      },
      {
        "name": "Punctuation",
        "scope": ["punctuation.separator", "punctuation.terminator"],
        "settings": {
          "foreground": highlight1
        }
      },
      {
        "name": "Punctuation",
        "scope": "punctuation.section",
        "settings": {
          "foreground": white0
        }
      },
      {
        "name": "Accessor",
        "scope": "punctuation.accessor",
        "settings": {
          "foreground": highlight1 
        }
      },
      {
        "name": "Annotation Punctuation",
        "scope": "punctuation.definition.annotation",
        "settings": {
          "foreground": teal0
        }
      },
      {
        "name": "JavaScript Dollar",
        "scope": [
          "variable.other.dollar.only.js",
          "variable.other.object.dollar.only.js",
          "variable.type.dollar.only.js",
          "support.class.dollar.only.js"
        ],
        "settings": {
          "foreground": teal0
        }
      },
      {
        "name": "Storage",
        "scope": "storage",
        "settings": {
          "foreground": red0
        }
      },
      {
        "name": "Storage type",
        "scope": "storage.type",
        "settings": {
          "fontStyle": "italic",
          "foreground": purple0
        }
      },
      {
        "name": "Entity name",
        "scope": "entity.name.function",
        "settings": {
          "foreground": teal0
        }
      },
      {
        "name": "Object Property JS",
        "scope": "meta.object-literal.key.js",
        "settings": {
          "foreground": blue0
        }
      },
      {
        "name": "Entity name",
        "scope": "entity.name - (entity.name.section | entity.name.tag | entity.name.label)",
        "settings": {
          "foreground": yellow0
        }
      },
      {
        "name": "Inherited class",
        "scope": "entity.other.inherited-class",
        "settings": {
          "fontStyle": "italic underline",
          "foreground": teal0
        }
      },
      {
        "name": "Function argument",
        "scope": "variable.parameter",
        "settings": {
          "fontStyle": "",
          "foreground": yellow0
        }
      },
      {
        "name": "Language variable",
        "scope": "variable.language",
        "settings": {
          "fontStyle": "italic",
          "foreground": red0
        }
      },
      {
        "name": "Tag name",
        "scope": "entity.name.tag",
        "settings": {
          "fontStyle": "",
          "foreground": red0
        }
      },
      {
        "name": "Tag attribute",
        "scope": "entity.other.attribute-name",
        "settings": {
          "foreground": purple0
        }
      },
      {
        "name": "Function call",
        "scope": ["variable.function", "variable.annotation"],
        "settings": {
          "fontStyle": "",
          "foreground": blue0
        }
      },
      {
        "name": "Library function",
        "scope": ["support.function", "support.macro"],
        "settings": {
          "fontStyle": "italic",
          "foreground": blue0
        }
      },
      {
        "name": "Library constant",
        "scope": "support.constant",
        "settings": {
          "fontStyle": "italic",
          "foreground": purple0
        }
      },
      {
        "name": "Library class/type",
        "scope": ["support.type", "support.class"],
        "settings": {
          // "fontStyle": "italic",
          "foreground": blue0
        }
      },
      {
        "name": "Invalid",
        "scope": "invalid",
        "settings": {
          "foreground": highlight1
        }
      },
      {
        "name": "Invalid deprecated",
        "scope": "invalid.deprecated",
        "settings": {
          "foreground": white0
        }
      },
      {
        "name": "YAML Key",
        "scope": "entity.name.tag.yaml",
        "settings": {
          "foreground": teal0
        }
      },
      {
        "name": "YAML String",
        "scope": "source.yaml string.unquoted",
        "settings": {
          "foreground": highlight0
        }
      },
      {
        "name": "markup headings",
        "scope": "markup.heading",
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "name": "markup headings",
        "scope": "markup.heading punctuation.definition.heading",
        "settings": {
          "foreground": red0
        }
      },
      {
        "name": "markup h1",
        "scope": "markup.heading.1 punctuation.definition.heading",
        "settings": {
          "foreground": red0
        }
      },
      {
        "name": "markup links",
        "scope": ["string.other.link", "markup.underline.link"],
        "settings": {
          "foreground": blue0
        }
      },
      {
        "name": "markup bold",
        "scope": "markup.bold",
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "name": "markup italic",
        "scope": "markup.italic",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "name": "markup bold/italic",
        "scope": "markup.italic markup.bold | markup.bold markup.italic",
        "settings": {
          "fontStyle": "bold italic"
        }
      },
      {
        "name": "markup hr",
        "scope": "punctuation.definition.thematic-break",
        "settings": {
          "foreground": yellow0
        }
      },
      {
        "name": "markup numbered list bullet",
        "scope": "markup.list.numbered.bullet",
        "settings": {
          "foreground": green0
        }
      },
      {
        "name": "markup blockquote",
        "scope": [
          "markup.quote punctuation.definition.blockquote",
          "markup.list punctuation.definition.list_item"
        ],
        "settings": {
          "foreground": yellow0
        }
      },
      {
        "name": "markup punctuation",
        "scope": "(text punctuation.definition.italic | text punctuation.definition.bold)",
        "settings": {
          "foreground": purple0
        }
      },
      {
        "name": "diff.header",
        "scope": ["meta.diff", "meta.diff.header"],
        "settings": {
          "foreground": purple0
        }
      },
      {
        "name": "diff.deleted",
        "scope": "markup.deleted",
        "settings": {
          "foreground": red0
        }
      },
      {
        "name": "diff.inserted",
        "scope": "markup.inserted",
        "settings": {
          "foreground": green0
        }
      },
      {
        "name": "diff.changed",
        "scope": "markup.changed",
        "settings": {
          "foreground": lightYellow0
        }
      },
      {
        "name": "CSS Properties",
        "scope": "support.type.property-name",
        "settings": {
          "fontStyle": "",
          "foreground": highlight0
        }
      },
      {
        "scope": "constant.numeric.line-number.match",
        "settings": {
          "foreground": red0
        }
      },
      {
        "scope": "message.error",
        "settings": {
          "foreground": red0
        }
      }
    ]
  }
  