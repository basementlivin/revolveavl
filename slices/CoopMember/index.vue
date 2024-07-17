<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CoopMemberSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="coop-members bg-drywall"
  >
    <div class="coop-members__inner flex-col">
      <div 
        v-for="(item, index) in slice.primary.member" 
        :key="index"
        class="member"
      >
        <div class="member__image">
          <NuxtImg 
            :src="item.member_photo.url" 
            class="image"
            :alt="item.member_photo.alt || item.member_name"
          />
        </div>
    
        <div class="member__info">
          <p class="role font-sans-regular">
            {{ item.member_role }}
          </p>
          <div class="name font-sans-light">
            <h3 class="first-last">
              {{ item.member_name }}
              <span class="pronouns font-condensed">
                ({{ item.member_pronouns }})
              </span>
            </h3>
          </div>
          
          <PrismicRichText
            :field="item.member_bio"
            class="bio font-sans-light"
          />

          <PrismicLink
            :field="item.member_link"
            class="link btn btn--primary"
          >
            {{ item.member_link_text }}
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/styles/slices/coop-members.scss';
</style>