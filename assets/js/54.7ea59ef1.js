(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{593:function(e,t,a){"use strict";a.r(t);var s=a(44),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"excel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#excel"}},[e._v("#")]),e._v(" Excel")]),e._v(" "),a("p",[e._v("Speckle currently supports the following versions of Excel:")]),e._v(" "),a("ul",[a("li",[e._v("Excel on iPad")]),e._v(" "),a("li",[e._v("Excel 2016 or later on Mac")]),e._v(" "),a("li",[e._v("Excel 2013 or later on Windows")]),e._v(" "),a("li",[e._v("Excel on the web")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Check out our dedicated tutorial on "),a("a",{attrs:{href:"https://speckle.systems/tutorials/getting-started-with-speckle-for-excel/",target:"_blank",rel:"noopener noreferrer"}},[e._v("how to get started with Excel"),a("OutboundLink")],1),e._v("!")])]),e._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("p",[e._v("For a quick overview, check out this short video on how to get started sending and receiving in Excel!")]),e._v(" "),a("div",{staticStyle:{position:"relative","padding-bottom":"56.25%"}},[a("iframe",{staticStyle:{position:"absolute"},attrs:{width:"100%",height:"100%",src:"https://www.youtube.com/embed/4viUTvo6BCw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),a("h3",{attrs:{id:"installing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[e._v("#")]),e._v(" Installing")]),e._v(" "),a("p",[a("strong",[e._v("Our Excel connector is not distributed via the Speckle Manager.")])]),e._v(" "),a("p",[e._v("Instead, you can get it from the Microsoft Office Store.")]),e._v(" "),a("p",[e._v("To install it:")]),e._v(" "),a("ul",[a("li",[e._v("Open Excel (for Desktop or Web)")]),e._v(" "),a("li",[e._v("Click on "),a("em",[e._v("Insert > Office Add-Ins")])]),e._v(" "),a("li",[e._v("Search for "),a("code",[e._v("speckle")]),e._v(" and click "),a("em",[e._v("Add")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/2679513/120383814-3ffdd600-c31d-11eb-8a77-7b34f8a0785f.png",alt:""}})]),e._v(" "),a("p",[e._v("Alternatively, just visit "),a("a",{attrs:{href:"https://appsource.microsoft.com/en-us/product/office/WA200002934",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://appsource.microsoft.com/en-us/product/office/WA200002934"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("After installing the connector, it should appear in Excel under the Home ribbon like so:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/2679513/119171684-cdf3da00-ba5c-11eb-87a5-bee798f96f90.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"logging-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging-in"}},[e._v("#")]),e._v(" Logging In")]),e._v(" "),a("p",[e._v("You'll need to log in to use this connector as it is unable to access your accounts from Speckle Manager. To do so, simply type your server url click on the log in button and insert your credentials.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("IMPORTANT 🙌")]),e._v(" "),a("p",[e._v("Currently, "),a("strong",[e._v("only accounts on servers managed by us are supported")]),e._v(", this is because of limitations on the Microsoft Office Store. To use the Excel connector with a server deployed by you, you'll have to publish it yourself.")])]),e._v(" "),a("h3",{attrs:{id:"adding-streams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-streams"}},[e._v("#")]),e._v(" Adding Streams")]),e._v(" "),a("p",[e._v("Just click the top left menu > Add stream > click on a stream to add to the document. "),a("strong",[e._v("The stream will be saved in the document and available whenever you return to it.")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/2679513/119180828-b4588f80-ba68-11eb-8ac3-0aa8f9d5158f.gif",alt:""}})]),e._v(" "),a("p",[e._v("By default, streams are added as receivers but you can easily switch them to sender mode.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/2679513/119181346-61330c80-ba69-11eb-9100-7f1b0f9ec82c.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"receiving-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data"}},[e._v("#")]),e._v(" Receiving Data")]),e._v(" "),a("p",[e._v('Receiving data in excel is quite different than in other connectors, and this is because we need to "flatten" it so to represent it in a table format. In general, a stream will either contain:')]),e._v(" "),a("ul",[a("li",[e._v("Simple values like numbers, text etc")]),e._v(" "),a("li",[e._v("Complex data structures (objects) like a Revit Wall or a Grasshopper Line. Objects are identified by a "),a("code",[e._v("{}")]),e._v(" symbol.")])]),e._v(" "),a("p",[e._v("The Excel connector works best when receiving lists of either simple values or objects of the same type. Lists are identified by a "),a("code",[e._v("[]")]),e._v(" symbol.")]),e._v(" "),a("p",[e._v("Since a commit can contain a variety of data types, after clicking the "),a("strong",[e._v("receive button")]),e._v(", you'll have the possibility to expand and select which data inside it to actually pull and write to your Excel file. You don't have to receive an entire commit each time!")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/2679513/119197116-2b991e00-ba7f-11eb-8e70-6d7e962361d5.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"simple-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-values"}},[e._v("#")]),e._v(" Simple Values")]),e._v(" "),a("p",[e._v('When receiving lists (or lists of lists AKA tables) of numbers or text, the data is received without transformations and the values are outputted by default in rows. Therefore, a single list will write data to a single row, a list of lists to multiple rows. If the incoming data has any further levels of nesting, it will be "string-ified".')]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/2679513/119188807-1b7b4180-ba73-11eb-955e-744cf2906e76.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objects"}},[e._v("#")]),e._v(" Objects")]),e._v(" "),a("p",[e._v("When receiving lists of objects they are flattened. This means that each object will become a new row and "),a("strong",[e._v("all its property values (and sub-property values) will become columns")]),e._v(", their names will be the headers.\nIndividual objects can be received too, and only one row will be created.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP 🙌")]),e._v(" "),a("p",[e._v("We recommend receiving lists of objects that have the same underlying data structure, i.e. only receiving objects of the same type.")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/2679513/119189886-88dba200-ba74-11eb-8066-cd98972a88dd.png",alt:""}})]),e._v(" "),a("p",[e._v("Nested objects are flattened as well and their properties delimited by a period "),a("code",[e._v(".")]),e._v(". See the example below where 10 lines have been streamed from Dynamo to Excel:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/2679513/119195280-4e760300-ba7c-11eb-8601-3ed72a6b0813.png",alt:""}})]),e._v(" "),a("h4",{attrs:{id:"complex-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#complex-objects"}},[e._v("#")]),e._v(" Complex Objects")]),e._v(" "),a("p",[e._v("When receiving complex objects (with more than 25 properties or sub-objects), you'll be presented with an additional dialog. This will let you filter which columns are to be received.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/2679513/120610238-e1cf1100-c44a-11eb-88cd-669d18faf0a6.gif",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"sending-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-data"}},[e._v("#")]),e._v(" Sending Data")]),e._v(" "),a("p",[e._v("Similarly to receiving, data can be sent a list of "),a("strong",[e._v("simple values")]),e._v(" or of "),a("strong",[e._v("objects")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"simple-values-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-values-2"}},[e._v("#")]),e._v(" Simple values")]),e._v(" "),a("p",[e._v('Just select the range of data you want to send and click "Set range"')]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/2679513/119195853-30f56900-ba7d-11eb-9ac5-fd057a44ac9f.gif",alt:""}})]),e._v(" "),a("p",[e._v("This is how it'll look in Speckle.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/2679513/119196013-72861400-ba7d-11eb-9258-b10f285a6eba.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"objects-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objects-2"}},[e._v("#")]),e._v(" Objects")]),e._v(" "),a("p",[e._v('To send objects, just replicate the structure of objects that you have previously received, then select "Set range with headers".')]),e._v(" "),a("p",[e._v("For instance, you could create 10 new lines with the data below:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/2679513/119196439-17085600-ba7e-11eb-8273-6fdf60e91894.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"advanced-workflows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-workflows"}},[e._v("#")]),e._v(" Advanced workflows")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("IMPORTANT")]),e._v(" "),a("p",[e._v("🚧 This section is under construction, we will add more documentation and examples on this soon! 🚧")])]),e._v(" "),a("p",[e._v("More advanced workflows are possible, similarly to how our "),a("RouterLink",{attrs:{to:"/user/grasshopper.html#schema-builder"}},[e._v("Grasshopper Schema Builder")]),e._v(" works, you can "),a("strong",[e._v("create BIM elements")]),e._v(" directly from Excel and "),a("strong",[e._v("update Revit elements")]),e._v(" too.")],1),e._v(" "),a("h3",{attrs:{id:"updating-revit-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-revit-parameters"}},[e._v("#")]),e._v(" Updating Revit Parameters")]),e._v(" "),a("p",[e._v("To update Revit paramteres from Excel, just copy paste the sample table below and update it with your element ids and values.\n"),a("strong",[e._v("We are working to make this flow simpler and more intuitive, it might change in the future")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("elementId")]),e._v(" "),a("th",[e._v("parameters.speckle_type")]),e._v(" "),a("th",[e._v("parameters.ALL_MODEL_INSTANCE_COMMENTS.value")]),e._v(" "),a("th",[e._v("parameters.ALL_MODEL_INSTANCE_COMMENTS.units")]),e._v(" "),a("th",[e._v("parameters.ALL_MODEL_INSTANCE_COMMENTS.speckle_type")]),e._v(" "),a("th",[e._v("speckle_type")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("198694")]),e._v(" "),a("td",[e._v("Base")]),e._v(" "),a("td",[e._v("My sample comment 1")]),e._v(" "),a("td",[e._v("m")]),e._v(" "),a("td",[e._v("Objects.BuiltElements.Revit.Parameter")]),e._v(" "),a("td",[e._v("Objects.BuiltElements.Revit.ParameterUpdater")])]),e._v(" "),a("tr",[a("td",[e._v("198749")]),e._v(" "),a("td",[e._v("Base")]),e._v(" "),a("td",[e._v("My sample comment 2")]),e._v(" "),a("td",[e._v("m")]),e._v(" "),a("td",[e._v("Objects.BuiltElements.Revit.Parameter")]),e._v(" "),a("td",[e._v("Objects.BuiltElements.Revit.ParameterUpdater")])]),e._v(" "),a("tr",[a("td",[e._v("234869")]),e._v(" "),a("td",[e._v("Base")]),e._v(" "),a("td",[e._v("My sample comment 3")]),e._v(" "),a("td",[e._v("m")]),e._v(" "),a("td",[e._v("Objects.BuiltElements.Revit.Parameter")]),e._v(" "),a("td",[e._v("Objects.BuiltElements.Revit.ParameterUpdater")])]),e._v(" "),a("tr",[a("td",[e._v("418079")]),e._v(" "),a("td",[e._v("Base")]),e._v(" "),a("td",[e._v("My sample comment 4")]),e._v(" "),a("td",[e._v("m")]),e._v(" "),a("td",[e._v("Objects.BuiltElements.Revit.Parameter")]),e._v(" "),a("td",[e._v("Objects.BuiltElements.Revit.ParameterUpdater")])])])]),e._v(" "),a("p",[e._v("Here's a breakdown of what each column means:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("elementId")]),e._v(" the Revit "),a("code",[e._v("ElementId")]),e._v(" or "),a("code",[e._v("UniqueId")])]),e._v(" "),a("li",[a("strong",[e._v("parameters.speckle_type")]),e._v(" always set to "),a("code",[e._v("Base")])]),e._v(" "),a("li",[a("strong",[e._v("parameters.BUILT_IN_PARAM_NAME.value")]),e._v(" the value to set on the parameter, where "),a("code",[e._v("BUILT_IN_PARAM_NAME")]),e._v(" should be replaced with the BuiltInParameter name from Revit")]),e._v(" "),a("li",[a("strong",[e._v("parameters.BUILT_IN_PARAM_NAME.units")]),e._v(" the unit of the parameter, only used in case of linear units, see supported values "),a("a",{attrs:{href:"https://github.com/specklesystems/speckle-sharp/blob/745b3d9bb4694b88fec722be7d7d92859fc74459/Core/Core/Kits/Units.cs#L8-L16",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("strong",[e._v("parameters.BUILT_IN_PARAM_NAME.speckle_type")]),e._v(" always set to "),a("code",[e._v("Objects.BuiltElements.Revit.Parameter")])]),e._v(" "),a("li",[a("strong",[e._v("speckle_type")]),e._v(" always set to "),a("code",[e._v("Objects.BuiltElements.Revit.ParameterUpdater")])])]),e._v(" "),a("p",[e._v("You can also "),a("strong",[e._v("update multiple parameters")]),e._v(" for each Revit element, to do so, just add more "),a("code",[e._v("parameters.BUILT_IN_PARAM_NAME")]),e._v(" columns.")]),e._v(" "),a("h2",{attrs:{id:"support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support"}},[e._v("#")]),e._v(" Support")]),e._v(" "),a("p",[e._v("For any feedback and support requests please visit our "),a("a",{attrs:{href:"https://speckle.community/",target:"_blank",rel:"noopener noreferrer"}},[e._v("community forum"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);