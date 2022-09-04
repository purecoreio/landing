<template>
    <div class="text-center">
        <h1 class="my-10">
            <slot name="title" />
        </h1>
        <h3 class="mb-10" style="max-width:600px;margin:auto;line-height:32px">
            <slot name="description" />
        </h3>
    </div>
</template>