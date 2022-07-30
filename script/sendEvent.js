function updateCountWhatsapp() {
        $.ajax({
            async: true,
            type: "GET",
            url: "https://baecars-backend-repo-knsq5w2lma-el.a.run.app/safelocksmith/updateCountWhatsapp",
            data: '{ clickObject:'+ "whatsapp"+new Date().toLocaleString()+' }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

            }
        });
    }
function updateCountCall() {
        $.ajax({
            async: true,
            type: "GET",
            url: "https://baecars-backend-repo-knsq5w2lma-el.a.run.app/safelocksmith/updateCountCall",
            data: '{ clickObject:'+ "call"+new Date().toLocaleString()+' }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

            }
        });
    }

