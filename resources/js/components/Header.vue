<template>
  <header>
      <nav>
          <ul>
              <li>
                  <router-link :to="{name: 'home'}">Home</router-link>
              </li>
              <li>
                  <router-link :to="{name: 'login'}">Login</router-link>
              </li>
              <li>
                  <router-link :to="{name: 'register'}">Register</router-link>
              </li>




          </ul>
      </nav>
  </header>
</template>

<script>
export default {
    name: "Header"
}
</script>
