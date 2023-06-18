<script setup lang="ts">
import { IJemaatFetch } from '~/types/IJemaatFetch';

const { x, y, pressure, pointerType } = usePointer()
const { public: config } = useRuntimeConfig()
const dataForm = reactive<FormPencarianJemaat>({
	nama: ''
})
const loading = shallowRef(false)
const userFetch = shallowRef<IJemaatFetch>({})
const notExists = shallowRef(false)
const userFetchExists = computed<boolean>(()=>userFetch.value?.nama && notExists.value ? true : false)
watch(dataForm, (val, old) => {
	notExists.value = false
})
const find = ()=>{
	loading.value = true
	useFetch(`${config.apiHost}/check/jemaat`, {
		params: {
			nama: dataForm.nama
		},
		headers: {
			accept: 'application/json'
		}
	}).then(e => {
		if(e.error && e.error.value?.statusCode){
			notExists.value = true
			userFetch.value = {} as IJemaatFetch
			return 
		}
		userFetch.value = e.data.value as IJemaatFetch
		notExists.value = true
	}).catch(e => {
		notExists.value = true
		userFetch.value = {} as IJemaatFetch
	}).finally(()=>{
		loading.value = false
	})
}
</script>
<template>
	<div class="p-8 bg-slate-800 h-screen text-slate-300 
		grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 relative">
		<div>
			
		</div>
		<div class="flex justify-center">
			<div class="flex flex-col gap-4 max-w-md w-full">
				<JemaatLabelPencarianJemaatDitemukan v-if="userFetchExists"
					:item="userFetch"></JemaatLabelPencarianJemaatDitemukan>
				<JemaatSkeletonLoaderPencarianJemaat v-else-if="(!userFetchExists && loading) || !notExists"></JemaatSkeletonLoaderPencarianJemaat>
				<JemaatLabelPencarianJemaatTidakDitemukan v-else
					:query="dataForm.nama"></JemaatLabelPencarianJemaatTidakDitemukan>
				<div class="text-sm rounded-xl border p-6 max-w-md w-full
					bg-slate-700 shadow-sm border-slate-600">
					<JemaatFormsSearchFormSearchJemaat
						@submit="find"
						v-model="dataForm"></JemaatFormsSearchFormSearchJemaat>
					<div class="flex gap-6 flex-col pt-6">
						<!-- daftar riwayat pencarian -->
						<div class="flex gap-4 items-center" v-for="i in 4">
							<div class="rounded-2xl h-8 w-8 bg-slate-600">
		
							</div>
							<div class="grow flex flex-col gap-2">
								<div class="rounded-md h-4 w-1/4 bg-slate-600">
			
								</div>
								<div class="rounded-md h-2 w-2/4 bg-slate-600">
			
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>

		</div>
	</div>
</template>