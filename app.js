class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.FormSubmit = Document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    }

    displaySuccess( ) {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    getFormObject() {
        const FormObject = {};
        const fields = this.form.querySelectorAll("[name]")
        fields.formEach((Field) => {
            FormObject[fields.getAttribute("name")] = Field.value;
        });
        return FormObject;
    }

    onSubmission(event) {
        event.preventDefault();
        event.target.disabled = true;
        event.target,innerText = "Enviando...";
    }

    async sendForm(event) {
        try {
            this.onSubmission(event);
        await fetch(this.url, {
            method: "POST",
            headers: {
                "content=Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess ();
        } catch (error) {
            this.displayError();
            throw new error (error);
        }
    }

    init ( ) {
        if (this.form) 
            this.FormButton.addEventListenner("click", this.sendForm);
        return this;
    }
}

        const formSubmit = new FormSubmit({
        form: "[data-form]",
        button: "[data-button]",
        success: "<h1 class='success'>Mensagem Enviada!</h1>",
        error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
        })

        formSubmit.init();