<script setup></script>

<template>
  <footer class="footer w-100 _py-4">
    <div class="container">
      <div class="row justify-end">
        <router-link :to="{name: 'Story', params: { lvl: '1.1' }}">
          <button class="btn">
            История
          </button>
        </router-link>
      </div>
      
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  z-index: 1;
}

.btn {
  color: white;
  border-radius: 10px;
  border: 4px solid white; 
  background: rgba(0, 73, 150, 1);
  width: 80px;
  height: 80px;
}

.grid {
  display: grid;
}
</style>
