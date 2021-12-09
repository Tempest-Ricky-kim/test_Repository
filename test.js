// ==UserScript==
// @name        New script - playcanvas.com
// @namespace   Violentmonkey Scripts
// @match       https://playcanvas.com/editor/scene/*
// @grant       none
// @version     1.0
// @author      -
// @require     http://localhost:8888/playcanvas/editor.js 
// @require     http://localhost:8888/test/util/utils.js 
// @description 2021. 12. 9. 오후 12:37:54
// ==/UserScript==

object_show_hierarchy(); 

//     'use strict';
//     const logCssStyle = 'color: white; background-color: #8e44ad';
//     const onEngineLoaded = function() {
//         console.log("%c yaustar's tools loaded :) ", logCssStyle);

//         const app = pc.Application.getApplication();
//         let menu = null;
//         const root = editor.call('layout.root');

//         app.mouse.on('mousedown', function(e) {
//             if (e.button === pc.MOUSEBUTTON_RIGHT) {
//                 if (menu) {
//                     root.remove(menu);
//                     menu = null;
//                 }

//                 const items = editor.selection.items;
//                 if (items.length === 1 && items[0] instanceof api.Entity) {
//                     const selectedEntity = items[0];
//                     // Build the context menu
//                     const menuItems = [];

//                     let parent = items[0].parent;
//                     let menuIndex = 1;
//                     while (parent) {
//                         const entityTarget = parent;
//                         const entityName = entityTarget.get('name');
//                         const entryTitle = menuIndex.toString() + ': ' + entityName;
//                         menuItems.push({
//                             text: entryTitle,
//                             onSelect: function() {
//                                 editor.selection.set([entityTarget]);
//                             }
//                         });

//                         parent = parent.parent;
//                         menuIndex += 1;
//                     }

//                     const menuArgs = {
//                         items: menuItems,
//                     };

//                     menu = new pcui.Menu(menuArgs);
//                     root.append(menu);

//                     // Do this on the next frame to work
//                     setTimeout(function () {
//                         menu.hidden = false;
//                         menu.position(e.event.clientX + 1, e.event.clientY);
//                     });

//                     e.event.preventDefault();
//                     e.event.stopPropagation();
//                 }
//             }
//         });
//     };

//     // Wait for the PlayCanvas application to be loaded
//     editor.once('load', () => {
//       onEngineLoaded();
//     });
//     // const intervalId = setInterval(function() {
//     //     if (pc.Application.getApplication()) {
//     //         onEngineLoaded();
//     //         clearInterval(intervalId);
//     //     }
//     // }, 500);

       