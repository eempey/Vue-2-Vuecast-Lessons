<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

       
    </head>
    <body>

        <div id="root">
            <h1>Is this thing on?</h1>
            <ul>
                <li v-for="skill in skills">@{{ skill }} </li>
            </ul>
        </div>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.9/vue.js"></script>
       <script src="js/app.js"></script>

    </body>
</html>
