/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function(config) {
    // Define changes to default configuration here. For example:
    config.language = 'zh-cn';
    config.toolbar = 'Full';
    config.extraPlugins = 'apage'; //注册插件
    config.resize_maxHeight = 1200;
    //改变大小的最大宽度
    config.resize_maxWidth = 1200;
    //改变大小的最小高度
    config.resize_minHeight = 200;
    //改变大小的最小宽度
    config.resize_minWidth = 200;
    config.resize_enabled = false;
    config.toolbar_Full = [
        ['Format', 'Bold', 'Italic', 'Strike', 'Table', 'HorizontalRule', 'SpecialChar', 'Link', 'Blockquote', '-', 'NumberedList', 'BulletedList', 'Page', 'Undo', 'Redo']
    ];
    config.removePlugins = 'elementspath';

};