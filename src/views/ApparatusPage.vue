<script></script>

<template>
    <h2>Apparatus</h2>

    <div>
        <button class="button">Create an Apparatus</button>
    </div>

    <div>
        <h3>Create Apparatus</h3>
            <div class="apparatus__create-wrapper">
            <label for="name">Name (Character req):</label>
            <input type="text" id="name" required/>
            
            <label for="description">Description(Character req):</label>
            <input type="text" id="description" required/>
            <button class="button submit">Submit Form</button>
        </div>
    </div>

    <ul>
        <li>List of Apparatuses</li>
    </ul>

</template>

<style>
.apparatus__create-wrapper {
    display: flex;
    flex-direction: column;
}

.apparatus__create-wrapper label {
    font-weight: bold;
}
</style>