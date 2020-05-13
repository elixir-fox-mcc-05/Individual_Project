<template>
  <div>
        <div class="plx-card gold content">        
            <div class="pxc-bg" :style="{'background-image':'url('+datameals.strMealThumb+')'}"> </div>
            <div class="pxc-avatar"><img :src= "datameals.strMealThumb"/></div>
            <div class="pxc-stopper"> </div>
            <div class="pxc-subcard">
                <div class="pxc-title">{{datameals.strMeal}}</div>
                <div class="pxc-sub"> {{datameals.strTags}}</div>
                <div class="pxc-feats">
                    <span>ingredients : {{this.datameals.strMeasure1+'-'+ this.datameals.strIngredient1 +','+ 
                        this.datameals.strMeasure2+'-'+ this.datameals.strIngredient2 +','+
                        this.datameals.strMeasure3+'-'+ this.datameals.strIngredient3 +','+
                        this.datameals.strMeasure4+'-'+ this.datameals.strIngredient4 +','+
                        this.datameals.strMeasure5+'-'+ this.datameals.strIngredient5 +','+
                            this.datameals.strMeasure6+'-'+ this.datameals.strIngredient6 +','+
                            this.datameals.strMeasure7+'-'+ this.datameals.strIngredient7 +','+
                            this.datameals.strMeasure8+'-'+ this.datameals.strIngredient8 +','+
                            this.datameals.strMeasure9+'-'+ this.datameals.strIngredient9 +','+
                                this.datameals.strMeasure10+'-'+ this.datameals.strIngredient10 +','+
                                this.datameals.strMeasure11+'-'+ this.datameals.strIngredient11 +','+
                                this.datameals.strMeasure12+'-'+ this.datameals.strIngredient12 +','+
                                this.datameals.strMeasure13+'-'+ this.datameals.strIngredient13 +','+
                                    this.datameals.strMeasure14+'-'+ this.datameals.strIngredient14 +','+
                                    this.datameals.strMeasure15+'-'+ this.datameals.strIngredient15 +','+
                                    this.datameals.strMeasure16+'-'+ this.datameals.strIngredient16 +','+
                                    this.datameals.strMeasure17+'-'+ this.datameals.strIngredient17 +','+
                                        this.datameals.strMeasure18+'-'+ this.datameals.strIngredient18 +','+
                                        this.datameals.strMeasure19+'-'+ this.datameals.strIngredient19 +','+
                                        this.datameals.strMeasure20+'-'+ this.datameals.strIngredient20 }}</span>
                    <p><span>Instructions :{{datameals.strInstructions}}</span></p>
                </div>
                <div class="pxc-tags">
                    <div>{{datameals.strArea}}</div>
                    <div>{{datameals.strTags}}</div>
                </div>
                <div class="bottom-row"> 
                    <div class="pxc-info">        
                        <div class="region">{{datameals.strArea}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content" >
            <youtube :video-id="this.datameals.videoId"></youtube>
        </div>
    
</div>
</template>

<script>
export default {
    name:"Detail",
    props :['datameals']

}
</script>

<style>

</style>