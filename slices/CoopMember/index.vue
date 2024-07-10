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
    class="coop-member bg-drywall"
  >
    <div 
      v-for="(item, index) in slice.primary.member" 
      :key="index"
      class="coop-member-card" 
    >
      <NuxtImg 
        :src="item.member_photo.url" 
        class="coop-member-photo"
        :alt="item.member_photo.alt || item.member_name"
      />
  
      <h3 class="coop-member-name">
        {{ item.member_name }}
      </h3>
      
      <p class="coop-member-pronouns">
        {{ item.member_pronouns }}
      </p>
      
      <p class="coop-member-role">
        {{ item.member_role }}
      </p>

      <PrismicRichText
        :field="item.member_bio"
        class="coop-member-bio"
      />
    </div>
  </section>
</template>
