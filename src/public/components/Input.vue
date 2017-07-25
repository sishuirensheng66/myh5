<style scoped lang="scss">
input{
	background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    box-sizing: border-box;
    color: #1f2d3d;
    display: inline-block;
    font-size: inherit;
    height: 36px;
    line-height: 1;
    outline: none;
    padding: 3px 10px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
input:focus{
	outline: none;
	border-color: #20a0ff;
}

</style>

<template>

<input style="focus:border-color:red;" :placeholder="placeholder"/>

</template>

<script>

export default {
	props : {
		focusColor : {
			default : '#20a0ff'
		},
		placeholder : {
			default : ''
		}
	}
}

</script>
