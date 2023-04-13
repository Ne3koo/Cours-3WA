<template>
    <div class="main">
        <ul>
            <button v-on:click="">Ajouter une tâche</button>
            <li v-for="item of tasks" class="li_style">
                {{  item.description }}
            </li>
            <div class="add_task">
                <p>description</p>
                <input type="text" id="task_add">
                <button>Enregistrer</button>
            </div>
        </ul>
    </div>
</template>

<style>
    .main { 
        padding: 2em 1em;
        font-family: sans-serif;
        font-size: 1.2rem;
        box-shadow:inset 0px 0px 20px -15px #252525;
    }
    .li_style {
        list-style: none;
        padding: 0.5em;
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 0.3em;
        margin: 0.5em;
    }
</style>

<script>
export default ({
    name: 'Main',
    methods: {

    },
    data () {
        return {
            tasks: [{
                description: 'Faire le ménage'
            },
            {
                description: 'Apprendre Vue'
            },
            {
                description: 'Faire un projet'
            }]
        }
    },
});
</script>