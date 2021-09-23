<template>
  <div>
    <aside
      class="fixed bg-white dark:bg-dark-900 top-0 left-0 duration-300 h-screen overflow-y-scroll select-none border-r border-gray-200 dark:border-gray-800"
      :class="opened ? 'w-64' : 'w-20'"
    >
      <div class="my-8 flex justify-center">
        <Logo />
      </div>
      <nav
        class="flex flex-col p-4 duration-300"
        :class="{'items-center': !opened}"
      >
        <SideBarItem title="home" link="/">
          <HomeIcon />
        </SideBarItem>
        <SideBarItem title="users" link="users">
          <UsersIcon />
        </SideBarItem>
        <SideBarItem title="subscribers" link="subscribers">
          <StarIcon />
        </SideBarItem>
        <SideBarItem title="translations" link="translations">
          <TranslateIcon />
        </SideBarItem>
        <SideBarItem title="files" link="files">
          <MediaIcon />
        </SideBarItem>
        <SideBarDivider />
        <SideBarCollapse title="ares">
          <template #icon>
            <GlobeIcon />
          </template>
          <template #children>
            <SideBarCollapseItem title="announces" link="announces">
              <NewspaperIcon />
            </SideBarCollapseItem>
            <SideBarCollapseItem title="informations" link="informations">
              <CrownIcon />
            </SideBarCollapseItem>
            <SideBarCollapseItem title="skills" link="skills">
              <CubeIcon />
            </SideBarCollapseItem>
            <SideBarCollapseItem title="formations" link="formations">
              <DegreeHatIcon />
            </SideBarCollapseItem>
            <SideBarCollapseItem title="experiences" link="experiences">
              <PresentationIcon />
            </SideBarCollapseItem>
            <SideBarCollapseItem title="tags" link="tags">
              <TagIcon />
            </SideBarCollapseItem>
            <SideBarCollapseItem title="colors" link="colors">
              <BrushIcon />
            </SideBarCollapseItem>
            <SideBarCollapseItem title="posts" link="posts">
              <PenIcon />
            </SideBarCollapseItem>
          </template>
        </SideBarCollapse>
        <SideBarDivider />
        <SideBarCollapse title="artemis">
          <template #icon>
            <CompassIcon />
          </template>
          <template #children>
            <SideBarCollapseItem title="links" link="links">
              <LinkIcon />
            </SideBarCollapseItem>
            <SideBarCollapseItem title="stats" link="statistiques">
              <GraphIcon />
            </SideBarCollapseItem>
          </template>
        </SideBarCollapse>
        <SideBarDivider />
        <SideBarCollapse title="tools">
          <template #icon>
            <GearIcon />
          </template>
          <template #children>
            <SideBarCollapseItem title="apollon">
              <CloudIcon />
            </SideBarCollapseItem>
            <SideBarCollapseItem title="stats">
              <GraphIcon />
            </SideBarCollapseItem>
          </template>
        </SideBarCollapse>
      </nav>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()
const opened = computed(() => store.getters.isOpened)
</script>
