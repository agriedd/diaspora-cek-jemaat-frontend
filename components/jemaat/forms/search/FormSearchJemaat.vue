<script setup lang="ts">
const model = defineModel<FormPencarianJemaat>({
	required: true
})
const emit = defineEmits([ "submit" ])
const nama = computed<string>({
	set: (val)=> {
		if(typeof model.value !== "undefined"){
			model.value.nama = val as string
		}
	},
	get: ()=> model?.value?.nama || ""
})
const submit = ()=>{
	emit("submit")
}
</script>
<template>
	<div class="relative">
		<input
			class="bg-slate-800 bg-opacity-75 rounded-xl px-4 py-3 
				w-full border border-slate-600 border-opacity-75
				pl-10 placeholder-slate-500
				pr-24"
				placeholder="Periksa Nama Jemaat..."
				v-model="nama"/>
		<div class="absolute left-0 w-10 justify-center top-0 h-full 
			flex items-center text-slate-500">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68Z"/></svg>
		</div>
		<div class="absolute right-0 w-24 justify-center top-0 h-full 
			flex items-center text-slate-500
			p-1">
			<button class="bg-indigo-500 h-full w-full rounded-lg
				text-white"
				@click="submit">
				Periksa
			</button>
		</div>
	</div>
</template>