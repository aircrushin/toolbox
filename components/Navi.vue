<template>
    <section class="">
        <div class="max-w-screen-xl mx-auto px-4 md:px-8">
            <ul class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <li v-for="(item, idx) in integrations" :key="idx" class="border rounded-lg shadow-md">
                    <div class="flex items-start justify-between p-6">
                        <div class="space-y-2 justify-start items-start">
                            <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-200">
                                <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                            </svg>
                            <h4 class="text-gray-200 font-semibold text-lg ml-2">{{ item.title }}</h4>
                        </div>
                            <p class="text-gray-300 text-sm">{{ item.desc }}</p>
                        </div>
                        <a :href="item.link" target="_blank">
                            <button
                                class="flex items-center gap-2 px-3 py-1.5 text-sm text-indigo-600 duration-150 mt-2 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-4 h-4">
                                    <path fillRule="evenodd"
                                        d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                                        clipRule="evenodd" />
                                </svg>
                                使用
                            </button>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { tools } from '../data/tools'

const integrations = tools
</script>