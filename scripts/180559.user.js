// ==UserScript==
// @name       WeiBo 急简 For MonKey
// @version    0.0.2
// @description    微博急简的猴子版,兼容性有待测试
// @include      http://weibo.com/*
// @include		 http://*.weibo.com/*
// @grant 			GM_addStyle
// @grant		   GM_setValue
// @grant		   GM_getValue
// @license			MIT License
// @namespace	itkso.com
// @origin		http://www.diff.im/weibo_wc/
// @author			@nowind
// @updateURL    http://userscripts.org/scripts/source/170916.user.js
// @downloadURL  http://userscripts.org/scripts/source/170916.user.js
// @run-at	document-end
// ==/UserScript==
// 0.0.1 打开关闭刷新生效
(function(){
    'use strict';
    // 调试开关
    var _LOG=false;
    function Log(s){if(_LOG)console.log(s);};
    var WeiBo_CSS_ID='g_monkey_wbmini';
	var  WeiBo_CSS= ".B_index #plc_main,\n.B_mention_me #plc_main,\n.B_box_comment_at #plc_main,\n.B_box_comment #plc_main,\n.B_box_comment_c #plc_main,\n.B_favor_me #plc_main,\n.B_send_me #plc_main,\n.B_message_list #plc_main,\n.B_message_dialogue #plc_main,\n.B_invite #plc_main,\n.B_closefriend #plc_main,\n.B_message_box #plc_main {width:750px !important;margin:4px 4px 4px 150px !important;background:#fafafa !important;padding:40px !important;float:right !important;box-shadow:0px 0px 3px rgba(0, 0, 0, 0.2);border-radius:8px !important;position:relative;z-index:2}\n\n\n.B_index  .W_main_a,\n.B_mention_me  .W_main_a,\n.B_box_comment_at .W_main_a,\n.B_box_comment .W_main_a,\n.B_box_comment_c .W_main_a,\n.B_favor_me .W_main_a,\n.B_send_me .W_main_a,\n.B_message_list .W_main_a,\n.B_message_dialogue .W_main_a,\n.B_invite .W_main_a,\n.B_closefriend .W_main_a,\n.B_message_box .W_main_a {width:100% !important;margin:0 !important;padding:0 !important;float:none !important;background:none !important}\n\n.B_index  .W_main_c,\n.B_mention_me  .W_main_c,\n.B_box_comment_at .W_main_c,\n.B_box_comment .W_main_c,\n.B_box_comment_c .W_main_c,\n.B_favor_me .W_main_c,\n.B_send_me .W_main_c,\n.B_myfollow .W_main_c,\n.B_fans_watch .W_main_c,\n.B_myfans  .W_main_c,\n.B_message_list .W_main_c,\n.B_message_dialogue .W_main_c,\n.B_invite .W_main_c,\n.B_closefriend .W_main_c,\n.B_message_box .W_main_c {margin:0 !important;width:100% !important;padding:0 !important;}\n\n.B_fans_myconn .W_main_c .cnfList {width:100% !important;}\n.big_comment_list .comment {width:90% !important}\n\n.B_myfans #plc_main,\n.B_myfollow #plc_main,\n.B_myfollow .W_main_a,\n.B_fans_watch #plc_relation_quietFollow,\n.B_fans_watch .W_main_a,\n.B_myfans  .W_main_a {width:750px !important;margin:4px !important;background:#fafafa !important;padding:40px !important;float:right !important;box-shadow:0px 0px 3px rgba(0, 0, 0, 0.2);border-radius:8px !important;position:relative;z-index:2}\n\n.B_myfans .W_main,\n.B_fans_watch .W_main,\n.B_invite .W_main,\n.B_myfollow .W_main {position:relative !important}\n\n.B_myfans .W_main_l,\n.B_fans_watch .W_main_l,\n.B_invite .W_main_l,\n.B_myfollow .W_main_l{position:absolute !important;}\n\n.B_myfollow .mylistBox .myfollow_list {width:217px !important}\n\n.profile_top .pf_tags,\n.profile_top .pf_tags .S_line5 {border:none !important;background:none!important}\n.profile_top .pf_tags .tags {padding:0 !important;height:auto !important;white-space:normal !important;}\n.profile_top .pf_tags .tags em {margin-right:5px !important}\n.profile_tabbig .pftb_lk .icobg{display:none !important;}\n.profile_tabbig .pftb_itm {width:100px !important;height:32px !important;display:block;overflow:hidden;font-size:14px !important;border:none !important}\n.profile_tabbig .pftb_itm a {border:none !important;background:none !important;}\n.profile_tabbig .pftb_lk{padding:0 !important;height:32px!important;}\n.profile_tabbig {background:none !important;border:none !important;}\n#pl_profile_nav .profile_tabbig .pftb_ul,\n.profile_tabbig .pftb_ul .S_line1,\n.profile_tabbig .pftb_itm {border:none !important;}\n\n.WB_media_list .S_bg2 {background:none !important;}\n\n\nbody.B_index,\nbody.B_mention_me,\nbody.B_box_comment,\nbody.B_favor_me,\nbody.B_send_me,\nbody.B_message_list,\nbody.B_message_dialogue,\nbody.B_notice,\nbody.B_fans_myconn,\n.B_closefriend,\n.B_box_comment_c,\n.B_myfollow,\n.B_fans_watch,\n.B_myfans,\n.B_fans_watch,\n.B_invite,\n.B_box_comment_at,\n.B_message_box {background:#eee !important;}\n\n\n.profile_top .S_line1_c,\n.profile_top .male,\n.profile_top .female,\n.profile_top a.arr_rt,\n.B_fans_watch .W_main_r,\n.myfanc_even .cnfList li .interactive_area,\n#pl_profile_cover,\n#pl_leftNav_relation .left_nav_line,\n .layer_guide,\n.B_closefriend #Box_right,\n#pl_content_closefriendsinvite,\n.WB_feed .repeat .tab_b,\n#pl_rightmod_groups,\n.tips_error,\n\n.WB_global_nav .gn_setting .gn_write,\n#pl_rightmod_ads36,\n.name_card .honour,\n.WB_feed .type_group .type_text,\n.B_box_comment_c #Box_right,\n#pl_guide_tips,\n.WB_feed .WB_face .W_btn_a,\n.WB_feed .stick_tips,\n.B_profile .group_read .lock_r,\n.webim_chat_tips,\n.WB_feed .feed_tag_list_form .wTablist2,\na.gn_member,\n.WBIM_last_feed .webim_comment_wrap,\n.WB_webim .webim_list .webim_fold_btn,\n.left_nav dt a.title img, .left_nav dt .title img,\n.W_tips.tips_warn,\n.B_profile_pic .tab_radious,\n.profile_top .pf_icon,\nbody.B_fans_myconn .W_main_r,\n.S_profile .suggest,\n.WB_left_nav .lev .W_ico20 ,\n.zero_news,\n.profile_top .pf_info_right,\nbody.B_profile .W_main_2r,\nbody.S_profile .W_main_2r,\n.send_private_msg .kind,\n.B_send_me .W_main_r,\n.B_favor_me .W_main_r,\n.B_invite .W_main_r,\n.B_favor_me .W_main_c .W_tips,\n.current .W_tabarrow,\n.B_box_comment_at .W_main_r,\nbody.B_notice .W_main_r,\nbody.B_message_list .W_main_l,\nbody.B_message_list .W_main_r,\nbody.B_message_dialogue .W_main_l,\nbody.B_box_comment .W_main_r,\nbody.B_notice .side_nav,\n#pl_leftnav_app,\n#trustPagelet_recom_interestv5,\n#pl_rightmod_ads35,\n#trustPagelet_recom_memberv5,\n#trustPagelet_recom_allinonev5,\n#pl_rightmod_noticeboard,\n#trustPagelet_zt_hottopicv5,\n.gn_nav,\n#pl_content_biztips,\n.W_person_info .nameBox,\n#pl_rightmod_yunying,\n.icon_praised,\n.templete_enter a,\n.send_weibo .input .arrow,\n.tab_nosep,\n.approve,\n.ico_member,\n.footer_adv,\n.approve_co,\n.ico_club,\n.global_footer,\n.title_area .title,\n.title_area a,\n.B_mention_me .W_main_r,\n#pl_leftnav_group,\n#WB_webim .wbim_hello,\n.B_message_dialogue .W_main_r,\n.group_read .right_bar .right_item:nth-of-type(2),\ndiv.WB_feed_type[data-mark]\n.WB_feed .popular_buss,\n.WBIM_news_bg,\n.layer_tips_intro,\n.WB_feed .W_no_border,\n.B_index .WB_right_module form.right_title,\n.WB_global_personcard .name_card_new .cover,\n.B_message_box #Box_right\n{display:none  !important;}\n\n \n.B_index .group_read {margin:}\n#pl_content_homeFeed .group_read .right_bar {opacity:0 !important}\n.group_read .right_bar {margin:16px 0 16px 0 !important}\n#pl_content_hisFeed:hover .group_read .right_bar,\n#pl_content_myFeed:hover .group_read .right_bar,\n#pl_content_homeFeed:hover .group_read .right_bar {opacity:1 !important;}\n.group_read .input_search {position:relative}\n.group_read .input_search .btn_arr {position:absolute;left:4px}\n.group_read .input_search .btns .W_vline {display:none !important}\n.group_read .input_search .noborder {margin-left:14px !important}\n.group_read .group_read_layer_advance {width:95% !important;margin-bottom:32px !important}\n.WB_feed .W_bread_nav {margin:0 20px 32px 20px !important}\n\n\n\n\n\n.W_miniblog {background:none !important;background-image:none !important;padding-top:60px !important}\n.S_bg4 {background:#ccc !important}\n.WB_global_nav .gn_logo {width:58px !important;height:39px !important;left:20px !important;overflow:hidden;margin:0 0 0 -27px !important;background:url(http://img.t.sinajs.cn/t5/style/images/global_nav/WB_logo.png?id=1346310929551) no-repeat !important}\n\n#WB_webim {opacity:0.4}\n#WB_webim:hover{opacity:1}\n\n\n\n.B_index #pl_leftnav_group,\n.layer_menulist_tags,\n.myfanc_even .cnfList li:hover .interactive_area,\n.B_closefriend #pl_leftnav_group,\n.layer_faces .tab_nosep,\n.level_2_Box div:nth-of-type(3){display:block !important}\n\n\n#pl_leftnav_group fieldset {border-top:1px solid #999 !important}\n.WB_feed a.notes {border-radius:4px !important}\n\n.setup_template .tab_nosep {display:block !important}\n\n.WB_handle a:link,.WB_handle a:visited {color:#999 !important}\n\n.WB_webim .W_chat_stat {width:4px   !important;height:4px  !important;}\n.webim_list_main {height:500px !important}\n\n.title_area .S_txt2 {font-size:1px !important;color:#fff !important;}\n.title_area span {font-size:16px !important;color:#666 !important}\n#pl_content_publisherTop {margin-bottom:12px !important}\n\n.send_weibo .input {margin:0 !important}\n.send_weibo .input .input_detail {width:98% !important}\n.WB_global_nav .gn_search {position:absolute !important;top:8px;right:20px;margin:0 !important;float:none;}\n.WB_global_nav .gn_person {float:none !important;margin-left:70px !important}\n.private_dialogue .content {width:80% !important}\n.send_weibo .kind_v2 {display:none !important;padding-left:16px !important}\n.send_weibo .func {opacity:0}\n#pl_content_publisherTop:hover .kind_v2 {display:block !important}\n#pl_content_publisherTop:hover .send_weibo .func {opacity:1}\n.layer_tips_intro {display:none}\n \n .WB_global_nav .gn_bg,\n .B_index .W_main{background:none !important;}\n .WB_global_nav {background:#333 !important;box-shadow:none !important;background-image:none !important;opacity:0.9}\n  .WB_global_nav:hover {opacity:1}\n .WB_global_nav .gn_setting .gn_tab:hover,\n .WB_global_nav .gn_setting .gn_name:hover {background:#222;}\n \n.W_main {background:none !important;}\n\n\n\n#pl_leftnav_group {width:120px;opacity:0.5;padding-left:12px !important}\n#pl_leftnav_group:hover {opacity:1}\n#pl_leftnav_group div .lev {float:left !important}\n#pl_leftnav_group .lev a,\n#pl_leftnav_group .lev a:hover,\n#pl_leftnav_group a.lev_curr {padding:0 6px !important;line-height:20px  !important;height:20px !important;margin:0 1px 1px 0 !important;background:#fafafa;border:1px solid #d0d0d0;border-radius:10px !important;}\n#pl_leftnav_group .lev a {color:#999 !important}\n#pl_leftnav_group .lev a:hover {background:#e0e0e0 !important;}\n#pl_leftnav_group a.lev_curr {background:#e0e0e0 !important}\n#pl_leftnav_group .icon_opt {display:none !important}\n#pl_leftnav_group .left_nav_line .tit {display:none !important}\n#pl_leftnav_group .left_nav_line fieldset {border:none !important;margin:0 !important}\n#pl_leftnav_group .level_2_Box {position:relative;}\n#pl_leftnav_group .level_2_Box div.levmore {position:absolute;top:0px;right:0;display:none !important}\n.left_nav_line fieldset .btns {margin:0 !important;position:absolute;top:8px;left:0}\n.left_nav_line fieldset .W_btn_round,.left_nav_line fieldset .W_btn_round span {background:url(http://img.t.sinajs.cn/t4/appstyle/webim/images/icons_n.png?id=1347435222123) -184px -3px !important;width:16px !important;height:16px !important;display:block;text-indent:-10000px;padding:0 !important;opacity:0.7}\n.left_nav_line fieldset .W_btn_round:hover {opacity:1}\n#pl_leftnav_common .level_2_Box[moreList] {display:block !important}\n#pl_leftnav_group .level_2_Box div:nth-of-type(2)  {display:block !important}\n.WB_left_nav .lev .levdot {display:none !important}\n.WB_left_nav .lev .levtxt {width:100% !important;line-height:20px !important;}\n\n\n\n.WB_left_nav .level_1_Box .lev a:hover,\n.WB_left_nav a.lev_curr:hover {background:#d0d0d0 !important;background-image:none !important;border-radius:8px 0 0 8px !important;}\n.WB_left_nav a {height:32px !important;line-height:32px !important;}\n.WB_left_nav a.lev_curr{background:#e0e0e0 !important;background-image:none !important;border-radius:8px 0 0 8px !important;height:32px !important;line-height:32px !important;margin-bottom:1px !important;}\n.WB_left_nav .lev2 a.lev_curr {background:none !important;text-decoration:underline !important}\n.WB_left_nav .lev2 a:hover,.WB_left_nav .lev2 a.lev_curr:hover {background:none !important;text-decoration:underline;}\n.B_index .user_atten {margin:10px 0 20px 0 !important;}\n.B_index .user_atten li {padding:0 !important;width:32% !important;text-align:center !important;margin:0 !important;}\n.user_atten li strong {font-size:12px !important;}\n.WB_feed .WB_media_list li img {border-radius:6px}\n\n.W_main{width:980px !important;margin:0 auto;background:none !important}\n.WB_global_nav .gn_header {width:100%  !important;}\n\nbody.B_profile .W_main_l {position:static !important}\nbody.B_index .W_main_l  {width:150px !important;padding:180px 0 0 0 !important;position:fixed !important;float:none important;}\n.B_mention_me .W_main_l,\n.B_box_comment_at .W_main_l,\n.B_box_comment .W_main_l,\n.B_box_comment_c .W_main_l,\n.B_favor_me .W_main_l,\n.B_closefriend .W_main_l,\n.B_send_me .W_main_l,\n.B_message_box .W_main_l{width:150px !important;padding:16px 0 0 0 !important;position:fixed !important}\n\n.B_index .W_main_r {position:fixed  !important;padding:0 !important;z-index:10001;margin:-40px 0 0 -190px !important;width:150px !important;height:180px !important;overflow:hidden !important;}\n.B_index .W_main_r .W_person_info {margin:0 !important;}\n\n.W_miniblog_fb {background:none !important;}\n\n\n\n\n\n\n\n.B_myfollow #plc_main,\n.B_fans_watch #plc_main,\n.B_myfans #plc_main,\n.B_fans_watch #plc_relation_quietFollow,\n.B_fans_myconn #plc_main {}\n\n.layer_menu_list {z-index:10}\n.W_main_bg {background:none !important;}\n.WB_feed_type {position:relative !important;}\n.WB_left_nav .lev2 a {padding-left:30px !important}\n.WB_left_nav .S_txt1 {color:#333 !important}\n\n.B_profile .WB_feed {padding-top:10px !important}\n\n.WB_feed .WB_feed_type,\n.WB_feed .WB_feed_datail  {border:none !important;padding: 0 !important;margin-bottom:32px !important}\nWB_feed_type .S_line2{border:none !important;}\n.WB_feed .WB_detail {padding-bottom:32px !important ;border-bottom:1px dotted #ddd}\n.WB_feed .WB_screen {margin:0;right:0}\n\n\n\n.W_face_radius img,\n.private_list .face .im_status img,\n.private_SRLr .face, .private_SRLl .face img,\n.cnfList .face img,\n.WB_feed .moveing_list li img,\n.all_msg_list .id_avatar img,\n.big_comment_list .face img{width:48px !important;height:48px !important;display:block !important;overflow:hidden !important;border-radius:25px !important;box-shadow:0px 0px 1px rgba(0, 0, 0, 0.3)}\n.W_person_info dt {background:none !important;width:auto !important;height:auto !important;text-align:center !important;float:none !important;width:100% !important;}\n.W_person_info dt img {margin:8px 0 0 22px !important;width:100px !important;height:100px !important;display:block !important;overflow:hidden !important;border-radius:50px !important;box-shadow:0px 0px 3px rgba(0, 0, 0, 0.3);border:none !important}\n.cnfList .img_list .list_item img,\n.WBIM_last_feed .webim_feed_pic a img,\n.WB_feed .spread .list li img,\n.comment_list dt img,\n.WB_webim .webim_head_30 .head_pic {width:30px !important;height:30px !important;display:block !important;overflow:hidden !important;border-radius:15px !important;}\n\nbody.S_profile,\nbody.B_profile {background-image:none !important}\n\n\n\n.myfollow_list .face img {border-radius:25px !important} \n.myfollow_list {border-radius:4px !important}\n\n\n\n\nbody.B_profile .W_main,\nbody.S_profile .W_main {width:980px !important;margin:0 auto;position:relative !important;margin:30px auto 30px auto !important;overflow:hidden;}\n.pf_head,\n.S_bg4{background:none !important}\n.S_profile_pic,\n.profile_pic {background-position:center top}\n.profile_top .pf_head_pic img {border-radius:90px;box-shadow:0px 0px 3px rgba(0, 0, 0, 0.3)}\n.profile_top .pf_head {box-shadow:none !important;position:fixed !important;top:75px !important;left:auto !important}\n.profile_top .pf_info {position:fixed !important;top:348px !important;left:auto !important;width:180px !important;display:block;overflow:hidden;margin:0 !important;padding:0 !important;height:500px;}\n.profile_top .pf_do {margin-top:50px !important}\n#pl_profile_nav,\n#plc_profile_fans,\nbody.S_profile #plc_main,\nbody.B_profile_info #plc_main,\nbody.S_profile #plc_main\n{margin-left:250px !important;padding:4px !important;}\nbody.B_index #plc_main {margin-left:0 !important}\n.layer_menulist_tags {background:none !important;border:none !important;position:static !important;width:100% !important;padding:0 !important;}\n.layer_menulist_tags ul li {margin:0 5px 0 0!important;}\n.layer_menulist_tags ul li a{background:none !important;padding:0 !important;}\n.layer_menulist_tags .W_btn_arrow span {padding:0 !important;background:none !important;}\n#pl_profile_nav .profile_tabbig {margin:0 !important}\n.profile_tabbig .pftb_ul {height:32px !important;}\n#plc_profile_header .S_bg5 {background:none !important}\n\n\nbody.S_profile .W_main_c ,\nbody.B_profile .W_main_c,\nbody.B_profile .W_main_2col_r {width:100% !important;margin:0 !important;padding:16px 0 !important;background:#fff;border-bottom-left-radius:8px !important;border-bottom-right-radius:8px !important;}\n.profile_top .pf_info_left {width:100% !important;height:auto !important;float:none !important}\n.profile_tab .pftb_lk,\n.profile_tab .S_line1,\n.profile_tab .pftb_itm {background:none !important;border:none !important;}\n#pl_profile_album{background:#fff !important;border-radius:8px !important;overflow:hidden !important; box-shadow:0px 1px 1px rgba(0, 0, 0, 0.3);padding:10px 0 !important}\n.W_profile .profile_tab .pftb_lk {opacity:0.6}\n.profile_tab .current.pftb_lk {opacity:1}\na.W_gotop {width:32px !important;height:32px !important;border:none !important;border-radius:16px !important;left:51% !important}\na.W_gotop .S_txt2 {display:none !important}\na.W_gotop span {padding-top:8px !important;border:none !important}\n.profile_top .pf_head .user_atten li.S_line1 {border-color:#666 !important}\nbody.B_favor_me .group_read .title {margin-bottom:32px}\n#pl_profile_hisInfo .W_btn_c span {padding:0 5px 0 2px !important}\n#wbim_box {right:0 !important }\n.WBIM_feed_main a {color:#999 !important}\n\n.W_main_c .module_wrap {width:auto !important;padding:10px 16px !important}\n.W_main .W_main_c .feed_lists {width:100% !important}\n\n\n.WB_global_personcard .name_card_new .name dt {margin-top:0 !important}\n.WB_global_personcard .name_card_new .name dd {margin:20px 0 0 10px !important}\n.WB_global_personcard .name_card_new .name dt img {width:64px !important;height:64px !important;border-radius:34px;}\n.WB_global_personcard .name_card_new .other_item {display:none}\n.B_message_box .group_read .title,\n.B_favor_me .group_read .title {background:none;padding:0;}\n.B_favor_me .group_read .title {position: absolute;top:0;}\n.B_message_box #pl_content_likeList .tab_normal{padding:0}\n.B_message_box #pl_content_commentList,\n.B_message_box #pl_content_atmeWeibo,\n.B_favor_me #pl_content_myFavoritesListNarrowPlus,\n.B_message_box #pl_content_messageList {position: relative}\n.B_message_box #pl_content_commentList .tab_normal .tab_normal_l {position: absolute;top:24px;}\n.B_message_box #pl_content_commentList .tab_normal .tab_normal_r,\n.B_message_box #pl_content_atmeWeibo .tab_normal .tab_normal_r,\n.B_message_box #pl_content_messageList .tab_normal .tab_normal_r{position: absolute;top:0;}\n.B_message_box #pl_content_messageList .group_read .title {text-indent:-1000000px}\n#pl_leftnav_common .level_1_Box:nth-child(2) {display: none}\n\n.profile_top {padding-bottom:0px !important;background:none;}\n.profile_pic_top {margin-top:12px;margin-left:253px;width:723px;height:221px !important;background-size:contain;border-top-left-radius:12px;border-top-right-radius:12px;}\n#Pl_Core_LeftPic__33, \n#Pl_Core_LeftPic__32, \n#Pl_Core_LeftPicText__34, \n#Pl_Core_LeftPicText__35, \n#Pl_Core_LeftPicText__36{display:none;}\n#Pl_Core_Nav__2 {width:722px;margin-left:254px;background:#f2f2f2;height:42px;overflow:hidden;border-bottom:1px solid #ddd;}\n.PRF_tab_noicon {border:none;background:none;}\n.pftb_itm_lst {display:none;}\n.pf_badge_icon {display:none}\n.Pl_Core_Nav__2 {margin-left:250px;}\n.PRF_tab_noicon .pftb_itm {border:none !important}\n.PRF_tab_noicon .pftb_lk {border:none !important;}\nbody.S_profile #plc_main {padding-top:0 !important;}";
;
    var MustAddStyle=function(s)
    {
        if(window.GM_addStyle)
        {
            GM_addStyle(s);
        }
        else
        {
            head = document.getElementsByTagName('head');
            if(head.length<1)head=[document];
            c=document.createElement('style');
            c.id=WeiBo_CSS_ID;
            c.innerHTML=s;
            head[0].appendChild(c);
        }
    };
    var AddButton=function(e)
    {
        Log('enter AddButton');
        var node=document.querySelectorAll('.gn_person .gn_topmenulist_set');
        if(node.length<1)return;
        else node=node[0];
        node.innerHTML='<ul class="gn_text_list"><li><a href="#" id="MonKey_Enable"></a></li></ul>'+node.innerHTML;
        var enable=node.querySelector('#MonKey_Enable');
        enable.setAttribute('enable',e?'true':'false');
        enable.innerHTML=(e?'关闭急简':'打开急简');
        enable.addEventListener('click',function(e)
                                {
                                    enable=(this.getAttribute('enable')=='true');
                                    GM_setValue('enable',!enable);
                                    location.reload();
                                }
                               );
    };
    function removeAd()
    {
        var x=document.querySelector('div[node-type=feed_list_recommend]');
        if(x)
        x.parentNode.removeChild(x);
    }
    var init=function()
    {
        removeAd();
        var isEnable=GM_getValue('enable',true);
        window.setTimeout(function(){AddButton(isEnable);},2000);
        if(!isEnable)
        {return;};        
        if (document.getElementById("g_wbmini")) return;
        MustAddStyle(WeiBo_CSS);
        
    };
    //init
    init();
})();