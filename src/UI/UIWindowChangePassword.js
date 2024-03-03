import UIWindow from './UIWindow.js'

async function UIWindowChangePassword(){
    const internal_id = window.uuidv4();
    let h = '';
    h += `<div class="change-password" style="padding: 20px; border-bottom: 1px solid #ced7e1;">`;
        // error msg
        h += `<div class="form-error-msg"></div>`;
        // success msg
        h += `<div class="form-success-msg"></div>`;
        // current password
        h += `<div style="overflow: hidden; margin-bottom: 20px;">`;
            h += `<label for="current-password-${internal_id}">Current Password</label>`;
            h += `<input id="current-password-${internal_id}" class="current-password" type="password" name="current-password" autocomplete="current-password" />`;
        h += `</div>`;
        // new password
        h += `<div style="overflow: hidden; margin-top: 20px; margin-bottom: 20px;">`;
            h += `<label for="new-password-${internal_id}">New Password</label>`;
            h += `<input id="new-password-${internal_id}" type="password" class="new-password" name="new-password" autocomplete="off" />`;
        h += `</div>`;
        // confirm new password
        h += `<div style="overflow: hidden; margin-top: 20px; margin-bottom: 20px;">`;
            h += `<label for="confirm-new-password-${internal_id}">Confirm New Password</label>`;
            h += `<input id="confirm-new-password-${internal_id}" type="password" name="confirm-new-password" class="confirm-new-password" autocomplete="off" />`;
        h += `</div>`;

        // Change Password
        h += `<button class="change-password-btn button button-primary button-block button-normal">Change Password</button>`;
    h += `</div>`;

    const el_window = await UIWindow({
        title: 'Change Password',
        app: 'change-passowrd',
        single_instance: true,
        icon: null,
        uid: null,
        is_dir: false,
        body_content: h,
        draggable_body: false,
        has_head: true,
        selectable_body: false,
        draggable_body: false,
        allow_context_menu: false,
        is_resizable: false,
        is_droppable: false,
        init_center: true,
        allow_native_ctxmenu: false,
        allow_user_select: false,
        width: 350,
        height: 'auto',
        dominant: true,
        show_in_taskbar: false,
        onAppend: function(this_window){
            $(this_window).find(`.current-password`).get(0).focus({preventScroll:true});
        },
        window_class: 'window-publishWebsite',
        body_css: {
            width: 'initial',
            height: '100%',
            'background-color': 'rgb(245 247 249)',
            'backdrop-filter': 'blur(3px)',
        }    
    })

    $(el_window).find('.change-password-btn').on('click', function(e){
        const current_password = $(el_window).find('.current-password').val();
        const new_password = $(el_window).find('.new-password').val();
        const confirm_new_password = $(el_window).find('.confirm-new-password').val();

        let data;

        if(current_password === '' || new_password === '' || confirm_new_password === ''){
            $(el_window).find('.form-error-msg').html('All fields are required.');
            $(el_window).find('.form-error-msg').fadeIn();
            return;
        }
        else if(new_password !== confirm_new_password){
            $(el_window).find('.form-error-msg').html('`New Password` and `Confirm New Password` do not match.');
            $(el_window).find('.form-error-msg').fadeIn();
            return;
        }
        
        $(el_window).find('.form-error-msg').hide();
    
        $.ajax({
            url: api_origin + "/passwd",
            type: 'POST',
            async: true,
            headers: {
                "Authorization": "Bearer "+auth_token
            },
            contentType: "application/json",
            data: JSON.stringify({ 
                old_pass: current_password, 
                new_pass: new_password,
            }),				
            success: function (data){
                $(el_window).find('.form-success-msg').html('Password changed successfully.');
                $(el_window).find('.form-success-msg').fadeIn();
                $(el_window).find('input').val('');
            },
            error: function (err){
                $(el_window).find('.form-error-msg').html(err.responseText);
                $(el_window).find('.form-error-msg').fadeIn();
            }
        });	
    })
}

export default UIWindowChangePassword