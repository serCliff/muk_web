/**********************************************************************************
* 
*    Copyright (C) 2017 MuK IT GmbH
*
*    This program is free software: you can redistribute it and/or modify
*    it under the terms of the GNU Affero General Public License as
*    published by the Free Software Foundation, either version 3 of the
*    License, or (at your option) any later version.
*
*    This program is distributed in the hope that it will be useful,
*    but WITHOUT ANY WARRANTY; without even the implied warranty of
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*    GNU Affero General Public License for more details.
*
*    You should have received a copy of the GNU Affero General Public License
*    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
**********************************************************************************/

openerp.muk_preview_video_PreviewHandler=function(instance) {


openerp.med_preview_PreviewHandler(instance);


var _t = instance.web._t,
   _lt = instance.web._lt;
var QWeb = instance.web.qweb;

instance.web.VideoHandler = instance.web.BaseHandler.extend({
	mimetypeMap: {
		'.mp4': 'video/mp4',
		'.webm': 'video/webm',
		'.ogg': 'video/ogg',
		'mp4': 'video/mp4',
		'webm': 'video/webm',
		'ogg': 'video/ogg',
	},
	checkExtension: function(extension) {
		return ['.mp4', '.webm', '.ogg', 'mp4', 'webm', 'ogg'].includes(extension);
    },
    checkType: function(mimetype) {
		return ['video/mp4', '	video/webm', 'video/ogg'].includes(mimetype);
    },
    createHtml: function(url, mimetype, extension, title) {
    	var result = $.Deferred();
    	if(!mimetype || mimetype === 'application/octet-stream') {
    		mimetype = this.mimetypeMap[extension];
    	}
		var $content = $(QWeb.render('VideoHTMLContent', {url: url, type: mimetype}));
        result.resolve($content);
		return $.when(result);
    },
});


};