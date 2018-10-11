
CKEDITOR.plugins.add( 'apage',{
    init : function( editor ) {
        // Add the link and unlink buttons.
        editor.addCommand( 'apage', {exec:function(){
            var inputObj=document.createElement('input')
             inputObj.setAttribute('id','_ef');
             inputObj.setAttribute('type','file');
             inputObj.setAttribute("style",'visibility:hidden');
             document.body.appendChild(inputObj);
    $("input").on("change", function() {
        // alert(event, $("input").files[0].value);
        // alert($("input").val());
        editor.insertHtml($("input").val());
    })
    
             inputObj.click();
        }} );
        editor.ui.addButton( 'Page',{
            //label : editor.lang.link.toolbar,
            label : "Page",
            icon: '/assets/images/noimage.png',
            command : 'apage'
            } );
        //CKEDITOR.dialog.add( 'link', this.path + 'dialogs/link.js' );
        CKEDITOR.dialog.add( 'apage', function( editor ){
//             var inputObj=document.createElement('input')
//          inputObj.setAttribute('id','_ef');
//          inputObj.setAttribute('type','file');
//          inputObj.setAttribute("style",'visibility:hidden');
//          document.body.appendChild(inputObj);
//          inputObj.click();
//          inputObj.value;
            return {
                // title : '文章分页',
                title: inputObj.value,
                minWidth : 350,
                minHeight : 100,
                contents : [
                    {
                        id : 'tab1',
                        label : 'First Tab',
                        title : 'First Tab',
                        elements :[{
                            id : 'pagetitle',
                            type : 'file',
                            label : '请输入下一页文章标题<br />(不输入默认使用当前标题+数字形式)'
                        }]
                    }
                ],
                onOk : function(){
                    editor.insertHtml("[page="+this.getValueOf( 'tab1', 'pagetitle' )+"]");
                }
            };
        });
    },
    requires : [ 'fakeobjects' ]
});


// CKEDITOR.plugins.add( 'apage',{
//     init : function( editor ) {
//         // Add the link and unlink buttons.
//         // editor.addCommand( 'apage', new CKEDITOR.dialogCommand( 'apage' ) );
//         editor.ui.addButton( 'Page',{
//             //label : editor.lang.link.toolbar,
//             label : "Page",
//             icon: '/assets/images/noimage.png',
//             command : 'apage'
//             } );
//         //CKEDITOR.dialog.add( 'link', this.path + 'dialogs/link.js' );
//         CKEDITOR.dialog.add( 'apage', function( editor ){
// //             var inputObj=document.createElement('input')
// //          inputObj.setAttribute('id','_ef');
// //          inputObj.setAttribute('type','file');
// //          inputObj.setAttribute("style",'visibility:hidden');
// //          document.body.appendChild(inputObj);
// //          inputObj.click();
// //          inputObj.value;
//             return {
//                 // title : '文章分页',
//                 title: inputObj.value,
//                 minWidth : 350,
//                 minHeight : 100,
//                 contents : [
//                     {
//                         id : 'tab1',
//                         label : 'First Tab',
//                         title : 'First Tab',
//                         elements :[{
//                             id : 'pagetitle',
//                             type : 'file',
//                             label : '请输入下一页文章标题<br />(不输入默认使用当前标题+数字形式)'
//                         }]
//                     }
//                 ],
//                 onOk : function(){
//                     editor.insertHtml("[page="+this.getValueOf( 'tab1', 'pagetitle' )+"]");
//                 }
//             };
//         });
//     },
//     requires : [ 'fakeobjects' ]
// });