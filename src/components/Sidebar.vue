<template>
    <sidebar-menu id="sidebar-menu" :menu="menu" />
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";

export default {
    name: "Sidebar",
    components: {
        "sidebar-menu": SidebarMenu
    },
    data() {
        return {
            menu: [
                {
                    href: "/",
                    title: "Dashboard",
                    icon: "fa fa-user"
                },
                {
                    href: "#",
                    title: "Charts",
                    icon: "fa fa-chart-area"
                }
            ]
        };
    }
};
</script>

<style>
#sidebar-menu {
  background: gray;
  max-width: 350px;
}
</style>
