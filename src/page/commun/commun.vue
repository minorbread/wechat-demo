<template>
  <div id="commun">
    <user-list></user-list>
    <right-nav></right-nav>
  </div>
</template>
<script type="text/ecmascript-6">
import RightNav from '../../components/right-nav/right-nav'
import UserList from '../../components/user-list/user-list'
export default {
  name: 'commun',
  components: {
    RightNav,
    UserList
  }
};
</script>
<style>
</style>