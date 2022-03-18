<template>
<div @click.capture="switchShadow()">
    <v-row no-gutters>
    <v-col>
        <v-card height="180px" class='primary'>
                <h1 style="font-size: 60px;
                        -webkit-text-fill-color: transparent;
                        -webkit-background-clip: text;
                        -webkit-text-stroke: thin;
                        -webkit-text-stroke-color: inherit;
                        font-family: 'mono space';
                        text-transform:uppercase;
                        text-align:center;
                        padding:42px;" :style="val">TOTAL SUM : </h1>
        </v-card>
    </v-col>
    <v-col>
        <v-card height="180px" class='primary'>
        </v-card>
    </v-col>
    <v-col>
        <v-card style="height:180px; width:-webkit-fill-available;" class='primary'>
            <iframe src="https://gifer.com/embed/fxcY" style="width:inherit; height:inherit" frameBorder="0" allowFullScreen></iframe>
        </v-card>
    </v-col>
    </v-row>
    </div>
</template>

<script>
export default {
    data: () => ({
        val:'text-shadow:2px 2px pink, -2px -2px lime',
        total:null,
        subtext:'Links might be placed here',
        textShadow:['text-shadow:	2px	2px	#6aed9e	,	-2px	-2px	#ffdebf'	,
                    'text-shadow:	6px	6px	#6eefcf	,	-6px	-6px	#ffbb7c'	,
                    'text-shadow:	10px	10px	#75dfef	,	-10px	-10px	#fcde85'	,
                    'text-shadow:	14px	14px	#85d4e2	,	-14px	-14px	#fcbbba'	,
                    'text-shadow:	18px	18px	#88fc79	,	-18px	-18px	#fcb0c1'	,
                    'text-shadow:	22px	22px	#8af2db	,	-22px	-22px	#f9a4c2'	,
                    'text-shadow:	26px	18px	#8df4b7	,	-26px	-18px	#f9a2bf'	,
                    'text-shadow:	30px	14px	#91f7b8	,	-30px	-14px	#f7ec8f'	,
                    'text-shadow:	34px	10px	#99fcc3	,	-34px	-10px	#f7c8aa'	,
                    'text-shadow:	38px	6px	#9bc4ef	,	-38px	-6px	#f79ea2'	,
                    'text-shadow:	42px	2px	#9ff9ae	,	-42px	-2px	#f788d7'	,
                    'text-shadow:	42px	-2px	#a3f9a2	,	-42px	2px	#f78086'	,
                    'text-shadow:	38px	-6px	#a4f791	,	-38px	6px	#f4de6e'	,
                    'text-shadow:	34px	-10px	#a7f9cb	,	-34px	10px	#f4b5fc'	,
                    'text-shadow:	30px	-14px	#aafff3	,	-30px	14px	#f4af97'	,
                    'text-shadow:	26px	-18px	#aefcae	,	-26px	18px	#f49d8d'	,
                    'text-shadow:	22px	-22px	#b5eafc	,	-22px	22px	#e1c9ff'	,
                    'text-shadow:	18px	-18px	#bdffa8	,	-18px	18px	#e01d85'	,
                    'text-shadow:	14px	-14px	#c1fcff	,	-14px	14px	#ddf98e'	,
                    'text-shadow:	10px	-10px	#c7f9a7	,	-10px	10px	#dc8bf9'	,
                    'text-shadow:	6px	-6px	#cbf99f	,	-6px	6px	#d186ef'	,
                    'text-shadow:	2px	-2px	#cce4ff	,	-2px	2px	#cce4ff'	,
                    'text-shadow:	-2px	2px	#d186ef	,	2px	-2px	#cbf99f'	,
                    'text-shadow:	-6px	6px	#dc8bf9	,	6px	-6px	#c7f9a7'	,
                    'text-shadow:	-10px	10px	#ddf98e	,	10px	-10px	#c1fcff'	,
                    'text-shadow:	-14px	14px	#e1c9ff	,	14px	-14px	#bdffa8'	,
                    'text-shadow:	-18px	18px	#f49d8d	,	18px	-18px	#b5eafc'	,
                    'text-shadow:	-22px	22px	#f4af97	,	22px	-22px	#aefcae'	,
                    'text-shadow:	-26px	18px	#f4b5fc	,	26px	-18px	#aafff3'	,
                    'text-shadow:	-30px	14px	#f4de6e	,	30px	-14px	#a7f9cb'	,
                    'text-shadow:	-34px	10px	#f78086	,	34px	-10px	#a4f791'	,
                    'text-shadow:	-38px	6px	#f788d7	,	38px	-6px	#a3f9a2'	,
                    'text-shadow:	-42px	2px	#f79ea2	,	42px	-2px	#9ff9ae'	,
                    'text-shadow:	-42px	-2px	#f7c8aa	,	42px	2px	#9bc4ef'	,
                    'text-shadow:	-38px	-6px	#f7ec8f	,	38px	6px	#99fcc3'	,
                    'text-shadow:	-34px	-10px	#f9a2bf	,	34px	10px	#91f7b8'	,
                    'text-shadow:	-30px	-14px	#f9a4c2	,	30px	14px	#8df4b7'	,
                    'text-shadow:	-26px	-18px	#fcb0c1	,	26px	18px	#8af2db'	,
                    'text-shadow:	-22px	-22px	#fcbbba	,	22px	22px	#88fc79'	,
                    'text-shadow:	-18px	-18px	#fcde85	,	18px	18px	#85d4e2'	,
                    'text-shadow:	-14px	-14px	#ffbb7c	,	14px	14px	#7b50fc'	,
                    'text-shadow:	-10px	-10px	#ffdebf	,	10px	10px	#75dfef'	,
                    'text-shadow:	-6px	-6px	#7b50fc	,	6px	6px	#6eefcf'	,
                    'text-shadow:	-2px	-2px	#e01d85	,	2px	2px	#6aed9e']
    }),
    methods:{
        switchShadow: function (){
            this.val = this.textShadow[Math.floor(Math.random()*45)]
        }
    }
}
</script>