<script setup lang="ts">
</script>

<template>
  <div class="profile">
    <h1 class="profile-title">profile</h1>
    <p class="profile-text">
      東京大学大学院理学系研究科物理学専攻修士課程修了。<br>
      修士 (理学)。修士論文のテーマは「超対称アフレック-ダイン・インフレーションモデルの構築」。<br>
      学部時代に所属したサークルで南米の民族風音楽「フォルクローレ」に出会い、物理学を志す傍ら演奏活動にも励む。
    </p>
    <p class="profile-text">
      現在は<a href="https://adways-deee.net/" target="_blank">株式会社ADWAYS DEEE</a>にて、<br>
      研究活動を通して身につけた数学・プログラミングの能力を活かし、データサイエンティストとして従事。<br>
      また、フォルクローレグループ「<a href="https://nishida-friends.jp/" target="_blank">西田フレンズ</a>」(活動休止中)
      および「YAMA」のメンバーとして活動も行っている。
    </p>

    <h1 class="profile-cv-title">Rough CV</h1>
    <table class="profile-cv-table">
      <tr>
        <th>2023/01-</th>
        <td>データサイエンティスト @ 株式会社アドウェイズ (ADWAYS DEEE出向)</td>
      </tr>
      <tr>
        <th>2021/04-2022/12</th>
        <td>ソフトウェアエンジニア @ 株式会社アドウェイズ</td>
      </tr>
      <tr>
        <th>2019/04-2021/03</th>
        <td>修士課程 @ 東京大学大学院理学系研究科物理学専攻、宇宙線研究所</td>
      </tr>
      <tr>
        <th>2015/04-2019/03</th>
        <td>東京大学教養学部理科I類、理学部物理学科</td>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="sass">
.profile-title
  font-size: 24px

.profile-cv-title
  font-size: 20px
  margin: 50px 0 10px

.profile-text
  font-size: 16px
  text-align: left

.profile-cv-table
  text-align: left

  th, td
    vertical-align: top
    padding-top: 5px
  
  th
    padding-right: 8px
</style>
