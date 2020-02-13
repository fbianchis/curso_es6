class App
{
    constructor()
    {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.registerHandlers();
    }

    registerHandlers()
    {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event)
    {
        event.preventDefault(); // não deixa que o form tenha o evento comum de ficar recarregando a página a cada submit
        this.repositories.push
        (
            {
                name:'rocketseat.com.br',
                description: 'Tire sua ideia do papel e dê vida à sua startup.',
                avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
                html_url: 'http://github.com/rocketseat/rocketseat.com.br'
            }
        );
        console.log(this.repositories);
    }
}

new App();