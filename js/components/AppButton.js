export default{

    template:`
    <button class="bg-grey border rounded disabled:cursor-not-allowed" :disabled="processing">
        <slot/> 
        </button>
    `,
    // mounted(){
    //     alert('hello');
    // }
    data(){
        return{
            // proessing true then button not clickable
            processing:true
        }
    }
}