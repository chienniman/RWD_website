const viewmodel=Vue.createApp({
    data(){
        return {
            swiper:[
                {
                    img_path:'./pics/gaming_pc/pc1.jpg',
                    img_alt_text:'酷炫七彩電競電腦商品照',
                    span:'新上市',
                    name:'極限迷紅幻彩電腦',
                    text:'高畫質、高性能、極致的電競體驗'
                },
                {
                    img_path:'./pics/gaming_pc/pc2.jpg',
                    img_alt_text:'水冷電競電腦商品照',
                    span:'最熱銷',
                    name:'水冷RGB夢幻機',
                    text:'快速降溫、0噪音'
                },
                {
                    img_path:'./pics/gaming_pc/pc3.jpg',
                    img_alt_text:'酷炫七彩電競電腦商品照',
                    span:'好上手',
                    name:'紫金幻彩流光機',
                    text:'便宜、高擴充性、不俗的電競體驗'
                },
                {
                    img_path:'./pics/gaming_pc/pc4.jpg',
                    img_alt_text:'酷炫七彩電競電腦商品照',
                    span:'最親民',
                    name:'鏖紅女巫魔幻機',
                    text:'高畫質、低電耗、省電利器'
                },
                {
                    img_path:'./pics/gaming_pc/pc5.jpg',
                    img_alt_text:'酷炫七彩電競電腦商品照',
                    span:'新上市',
                    name:'星河無垠彩光機',
                    text:'多核處理、極限冷卻、星河炫彩'
                },
                {
                    img_path:'./pics/gaming_pc/pc6.jpg',
                    img_alt_text:'酷炫七彩電競電腦商品照',
                    span:'最划算',
                    name:'末日審判穿越機',
                    text:'人性化、高性能、極致的電競體驗'
                },
            ],
            computer_card:[
                {
                    img_path:'./pics/gaming_card/card1.jpg',
                    img_alt_text:'電競產品周邊商品照',
                    span:'新上市',
                    name:'人體工學耳機手柄組',
                    text:'極致手感，您值得擁有',
                    link:'立即擁有，數量有限'
                },
                {
                    img_path:'./pics/gaming_card/card2.jpg',
                    img_alt_text:'電競產品周邊商品照',
                    span:'新上市',
                    name:'無限急殺滑鼠',
                    text:'一旦開始就無法停止遊玩',
                    link:'立即擁有，數量有限'
                },
                {
                    img_path:'./pics/gaming_card/card3.jpg',
                    img_alt_text:'電競產品周邊商品照',
                    span:'超限量',
                    name:'天籟人聲耳機',
                    text:'極致美音，細膩分辨',
                    link:'立即搶購'
                },
                {
                    img_path:'./pics/gaming_card/card4.jpg',
                    img_alt_text:'電競產品周邊商品照',
                    span:'最熱銷',
                    name:'黑暗主機遊戲手柄',
                    text:'魔幻製成，餘韻無窮',
                    link:'立即搶購'
                },
            ],
            computer_card2:[
                {
                    img_path:'./pics/gaming_card/card5.jpg',
                    img_alt_text:'電競產品周邊商品照',
                    span:'新上市',
                    name:'死亡龐克環繞低音',
                    text:'如入其境的沉靜式體驗',
                    link:'立刻購買，數量有限'
                },
                {
                    img_path:'./pics/gaming_card/card6.jpg',
                    img_alt_text:'電競產品周邊商品照',
                    span:'預售中',
                    name:'彩虹電幻獨角獸手柄',
                    text:'如夢如幻的電競體驗，為女玩家量身訂造',
                    link:'立即擁有，數量有限'
                },
                {
                    img_path:'./pics/gaming_card/card7.jpg',
                    img_alt_text:'電競產品周邊商品照',
                    span:'超限量',
                    name:'精造人體工學電競椅',
                    text:'完美曲度，支持您前進的強大力量',
                    link:'立即搶購'
                },
                {
                    img_path:'./pics/gaming_card/card8.jpg',
                    img_alt_text:'電競產品周邊商品照',
                    span:'最熱銷',
                    name:'靈魂附魔+9滑鼠',
                    text:'如同矮人族巫師打造，具有神奇的力量',
                    link:'立即搶購'
                },
            ],
            onestore:[
                {
                    img_path:'./pics/onestore/onestore1.jpg',
                    title:'最棒的電競體驗，不僅來自於科技，也來自人性',
                    link:'了解詳情'
                },
                {
                    img_path:'./pics/onestore/onestore2.jpg',
                    title:'我們經營的每分每秒，都在堅持作對的事',
                    link:'品牌堅持'
                },
                {
                    img_path:'./pics/onestore/onestore3.jpg',
                    title:'超過20名的電競選手一致推薦，最棒的電競品牌，魔幻電競',
                    link:'前往購買'
                }
            ],
            // 電競室的照片
            img_path:'',
            title:'',
            link:'',
        }
    },
    methods:{
        // 隨機取出推薦
        get_random_onestore_pic:function(){
            var arr=this.onestore;
            var arr_rand = Math.floor(Math.random()*arr.length);
            this.img_path=arr[arr_rand].img_path;
            this.title=arr[arr_rand].title;
            this.link=arr[arr_rand].link;
            console.log(this.selected_onestore)
        }
    },
    Created() {
        
    },
    mounted() {
        this.get_random_onestore_pic()
    },
})
viewmodel.mount("#vue_index");