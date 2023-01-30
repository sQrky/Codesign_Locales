window.locales = {
    navigation: {
        title: "CCTV System",
        search: "Search",
        search_placeholder: "Search"
    },

    camera: {
        move: "Move - Mouse move",
        zoom: "Zoom - Scroll",
        exit: "Exit - Right click",

        list : {
            view: 'View <i class="bi bi-eye-fill"></i>',
            access: 'Manage access <i class="bi bi-person-gear"></i>',
            delete: 'Delete <i class="bi bi-trash"></i>',
            no_permissions: 'No access permissions yet.',
        },

        create: {
            create: "Create a camera",
            name: "Camera name",
            name_placeholder:"Input the camera name",

            create_button: "Create",
            cancel_button: "Cancel",

            alert: "This camera name already exists."
        }
    },

    access:{
        manage: 'Manage access - ',
        add: "Add",

        player: "Player Identifier (Server ID)",
        player_placeholder: "Input the player identifier (Server ID)",
        player_description: "Input the Player ID (Server ID) of the person which will have access to the CCTV camera.",

        job: "Job",
        job_placeholder:"Example: police",
        job_description: "Select a job from the list which will be allowed to use the CCTV camera.",

        update_button: "Update",
        cancel_button: "Cancel"
    },

    modal: {
        cancel: "Cancel",
        confirm: "Confirm",
        decline: "Decline" 
    },



    placement: {
        place: "<kbd>E</kbd> - Place camera,",
        cancel: "<kbd>ESC / BACKSPACE</kbd> - Cancel,",
        rotate: '<kbd>SCROLL <i class="bi bi-mouse"></i></kbd> - Rotate'
    },

    footer:{
        text: `CCTV 1.0.0 - Codesign &copy; ${new Date().getFullYear()}`
    }
}