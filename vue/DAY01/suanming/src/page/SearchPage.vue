<template>
    <div class="viewbox">
        <div class="title">
            <h2>卜易居姓名八字综合算命</h2>
        </div>
        <div class="info">
            <small>请输入公历，只知道农历，请点击<a href="/cha/yyl.php">农历在线查公历</a></small>
        </div>
        <div class="inform">
            <form action="/sm/#csshow" method="post" name="sm">
                <p>姓氏： <input type="text" name="xing" maxlength="2" value="张" size="4" class="ipt" v-model="firstname">
                    名字：<input type="text" name="ming" maxlength="2" value="无忌" size="6" class="ipt" v-model="lastname"></p>
                <p>
                    性别：
                    <label for="sex1" style="margin-right: 20px">
                        <input type="radio" name="sex" id="sex1" value="男" v-model="gender">
                        男性
                    </label>
                    <label for="sex0">
                        <input type="radio" id="sex0" name="sex" value="女" checked="" v-model="gender">
                        女性
                    </label>
                </p>
                <p>公历：
                    <select size="1" name="year" class="select" v-model="year">
                        <option value="1945">1945</option>
                        <option value="1946">1946</option>
                        <option value="1947">1947</option>
                        <option value="1948">1948</option>
                        <option value="1949">1949</option>
                        <option value="1950">1950</option>
                        <option value="1951">1951</option>
                        <option value="1952">1952</option>
                        <option value="1953">1953</option>
                        <option value="1954">1954</option>
                        <option value="1955">1955</option>
                        <option value="1956">1956</option>
                        <option value="1957">1957</option>
                        <option value="1958">1958</option>
                        <option value="1959">1959</option>
                        <option value="1960">1960</option>
                        <option value="1961">1961</option>
                        <option value="1962">1962</option>
                        <option value="1963">1963</option>
                        <option value="1964">1964</option>
                        <option value="1965">1965</option>
                        <option value="1966">1966</option>
                        <option value="1967">1967</option>
                        <option value="1968">1968</option>
                        <option value="1969">1969</option>
                        <option value="1970">1970</option>
                        <option value="1971">1971</option>
                        <option value="1972">1972</option>
                        <option value="1973">1973</option>
                        <option value="1974">1974</option>
                        <option value="1975">1975</option>
                        <option value="1976">1976</option>
                        <option value="1977">1977</option>
                        <option value="1978">1978</option>
                        <option value="1979">1979</option>
                        <option value="1980">1980</option>
                        <option value="1981">1981</option>
                        <option value="1982">1982</option>
                        <option value="1983">1983</option>
                        <option value="1984">1984</option>
                        <option value="1985" selected="">1985</option>
                        <option value="1986">1986</option>
                        <option value="1987">1987</option>
                        <option value="1988">1988</option>
                        <option value="1989">1989</option>
                        <option value="1990">1990</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option value="1993">1993</option>
                        <option value="1994">1994</option>
                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                    年
                    <select size="1" name="month" class="select" v-model="month">
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12" selected="">12</option>
                    </select>

                    月
                    <select size="1" name="day" class="select" v-model="day">
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15" selected="">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                </p>
                <p>时辰：
                    <select size="1" name="hour" class="select" v-model="hour">

                        <option value="00">
                            子 00:00-00:59
                        </option>

                        <option value="01">
                            丑 01:00-01:59
                        </option>

                        <option value="02">
                            丑 02:00-02:59
                        </option>

                        <option value="03">
                            寅 03:00-03:59
                        </option>

                        <option value="04">
                            寅 04:00-04:59
                        </option>

                        <option value="05">
                            卯 05:00-05:59
                        </option>

                        <option value="06">
                            卯 06:00-06:59
                        </option>

                        <option value="07">
                            辰 07:00-07:59
                        </option>

                        <option value="08">
                            辰 08:00-08:59
                        </option>

                        <option value="09">
                            巳 09:00-09:59
                        </option>

                        <option value="10">
                            巳 10:00-10:59
                        </option>

                        <option value="11">
                            午 11:00-11:59
                        </option>

                        <option value="12">
                            午 12:00-12:59
                        </option>

                        <option value="13">
                            未 13:00-13:59
                        </option>

                        <option value="14">
                            未 14:00-14:59
                        </option>

                        <option value="15">
                            申 15:00-15:59
                        </option>

                        <option value="16">
                            申 16:00-16:59
                        </option>

                        <option value="17">
                            酉 17:00-17:59
                        </option>

                        <option value="18">
                            酉 18:00-18:59
                        </option>

                        <option value="19">
                            戌 19:00-19:59
                        </option>

                        <option value="20">
                            戌 20:00-20:59
                        </option>

                        <option value="21">
                            亥 21:00-21:59
                        </option>

                        <option value="22">
                            亥 22:00-22:59
                        </option>

                        <option value="23">
                            子 23:00-23:59
                        </option>

                    </select> 点
                </p>
                <input type="hidden" name="action" value="test">
                <input type="button" value="开始算命" class="button" @click="start">
            </form>
        </div>
        <div class="content">
            <p>算命与占卜，是世界各国所共有的神秘文化现象，反映了人类对未知命运的求知心理，其中虽不乏迷信的成份，亦有诸多合理的思维。本站测试项目主要根据中华传统周易学或民间流传的占卜法制定，测试结果仅供娱乐参考。</p>
        </div>
    </div>
</template>
<script>
export default{
    data:function(){
        return{
            firstname:'陈',
            lastname:'吴',
            gender:'男',
            year:'1998',
            month:'12',
            day:'27',
            hour:'12'
        }
        
    },
    methods:{
        start:function(){
            console.log(this)
            let httpUrl = 'http://xuanxue.market.alicloudapi.com/ai_china_knowledge/bazi/v1'
            let birth = this.year+this.month+this.day+this.hour+this.hour+this.hour
            let query = `?BIRTH=${birth}&FIRST_NAME=${this.firstname}&GENDER=${this.gender}&SECOND_NAME=${this.lastname}`
            let options = {
                headers:{
                    "Authorization":"APPCODE 4d7a3d98f8db41509806da3f1fdeaaf5"
                }
            }
            fetch(httpUrl+query,options)
            .then(res=>res.json())
            .then(data=>{
                this.$emit('changeComEvent',data)
                console.log(data)
            })
        }
    }
}
</script>