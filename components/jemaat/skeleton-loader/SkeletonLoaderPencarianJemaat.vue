<script setup lang="ts">

</script>
<template>
	<div class="text-sm rounded-xl border p-8 max-w-md w-full
		bg-slate-700 shadow-sm border-slate-600">
		<div class="flex flex-col gap-4">
			<div class="flex gap-4">
				<div class="rounded-2xl h-16 w-16 bg-slate-600">

				</div>
				<div class="grow flex flex-col gap-2">
					<div class="rounded-md h-6 w-3/4 bg-slate-600">

					</div>
					<div class="rounded-md h-4 w-4/4 bg-slate-600" v-for="i in 2">

					</div>
				</div>
			</div>
			<div class="flex gap-4 pt-6 border-t border-slate-600">
				<div class="rounded-md h-4 grow bg-slate-600" v-for="i in 2">

				</div>
			</div>
		</div>
	</div>
</template>