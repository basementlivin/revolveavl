// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutDocumentDataSlicesSlice = never;

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * Slice Zone field in *About*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice> /**
   * Meta Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

type EventDocumentDataSlicesSlice = ImageSlice | TextWithImageSlice | TextSlice;

/**
 * Content for Event documents
 */
interface EventDocumentData {
  /**
   * Event Title field in *Event*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.event_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  event_title: prismic.RichTextField;

  /**
   * Program field in *Event*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Choose the program that best describes this event.
   * - **API ID Path**: event.program
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  program: prismic.SelectField<
    | "Exhibition"
    | "Performance"
    | "Revolve Sound"
    | "Film Screening"
    | "Queer Artist Meetup"
    | "Skillshare"
    | "Community Event"
  >;

  /**
   * Date and Time field in *Event*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: event.date_and_time
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#timestamp
   */
  date_and_time: prismic.TimestampField;

  /**
   * Featured Image field in *Event*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: event.featured_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featured_image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Event*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: event.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<EventDocumentDataSlicesSlice> /**
   * Meta Description field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: event.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Title field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: event.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;

  /**
   * Meta Image field in *Event*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: event.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Event document from Prismic
 *
 * - **API ID**: `event`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<EventDocumentData>, "event", Lang>;

/**
 * Item in *Navigation → Links*
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Label field in *Navigation → Links*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Optional - Label for the link
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.TitleField;

  /**
   * Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for navigation item
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | CallToActionSlice
  | CoopMemberSlice
  | NewsletterSignupSlice
  | HeroSlice
  | QuoteSlice
  | TextSlice
  | ImageSlice
  | ImageCardsSlice
  | TextWithImageSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Parent field in *Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.parent
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  parent: prismic.ContentRelationshipField<"page">;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: REVOLVE
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | AboutDocument
  | EventDocument
  | NavigationDocument
  | PageDocument
  | SettingsDocument;

/**
 * Primary content in *CallToAction → Static → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
  /**
   * CTA Text field in *CallToAction → Static → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.default.primary.cta_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  cta_text: prismic.RichTextField;

  /**
   * CTA Link field in *CallToAction → Static → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.default.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/**
 * Static variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *CallToAction → Marquee → Primary*
 */
export interface CallToActionSliceMarqueePrimary {
  /**
   * CTA Text field in *CallToAction → Marquee → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.marquee.primary.cta_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  cta_text: prismic.RichTextField;

  /**
   * CTA Link field in *CallToAction → Marquee → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.marquee.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/**
 * Marquee variation for CallToAction Slice
 *
 * - **API ID**: `marquee`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceMarquee = prismic.SharedSliceVariation<
  "marquee",
  Simplify<CallToActionSliceMarqueePrimary>,
  never
>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation =
  | CallToActionSliceDefault
  | CallToActionSliceMarquee;

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<
  "call_to_action",
  CallToActionSliceVariation
>;

/**
 * Item in *CoopMember → Default → Primary → Co-Op Member*
 */
export interface CoopMemberSliceDefaultPrimaryMemberItem {
  /**
   * Photo field in *CoopMember → Default → Primary → Co-Op Member*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: coop_member.default.primary.member[].member_photo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  member_photo: prismic.ImageField<never>;

  /**
   * Member Name field in *CoopMember → Default → Primary → Co-Op Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: coop_member.default.primary.member[].member_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  member_name: prismic.KeyTextField;

  /**
   * Pronouns field in *CoopMember → Default → Primary → Co-Op Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: coop_member.default.primary.member[].member_pronouns
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  member_pronouns: prismic.KeyTextField;

  /**
   * Role/Responsibilities field in *CoopMember → Default → Primary → Co-Op Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: coop_member.default.primary.member[].member_role
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  member_role: prismic.KeyTextField;

  /**
   * Bio field in *CoopMember → Default → Primary → Co-Op Member*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: coop_member.default.primary.member[].member_bio
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  member_bio: prismic.RichTextField;

  /**
   * Web or social link field in *CoopMember → Default → Primary → Co-Op Member*
   *
   * - **Field Type**: Link
   * - **Placeholder**: https://
   * - **API ID Path**: coop_member.default.primary.member[].member_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  member_link: prismic.LinkField;

  /**
   * Link Text field in *CoopMember → Default → Primary → Co-Op Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: coop_member.default.primary.member[].member_link_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  member_link_text: prismic.KeyTextField;
}

/**
 * Primary content in *CoopMember → Default → Primary*
 */
export interface CoopMemberSliceDefaultPrimary {
  /**
   * Co-Op Member field in *CoopMember → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: coop_member.default.primary.member[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  member: prismic.GroupField<Simplify<CoopMemberSliceDefaultPrimaryMemberItem>>;
}

/**
 * Default variation for CoopMember Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CoopMemberSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CoopMemberSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CoopMember*
 */
type CoopMemberSliceVariation = CoopMemberSliceDefault;

/**
 * CoopMember Shared Slice
 *
 * - **API ID**: `coop_member`
 * - **Description**: CoopMember
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CoopMemberSlice = prismic.SharedSlice<
  "coop_member",
  CoopMemberSliceVariation
>;

/**
 * Primary content in *EventPicker → Default → Primary*
 */
export interface EventPreviewSliceDefaultPrimary {
  /**
   * Event Picker field in *EventPicker → Default → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: event_preview.default.primary.eventPicker
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  eventPicker: prismic.ContentRelationshipField<"event">;
}

/**
 * Default variation for EventPicker Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EventPreviewSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<EventPreviewSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *EventPicker*
 */
type EventPreviewSliceVariation = EventPreviewSliceDefault;

/**
 * EventPicker Shared Slice
 *
 * - **API ID**: `event_preview`
 * - **Description**: EventPreview
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EventPreviewSlice = prismic.SharedSlice<
  "event_preview",
  EventPreviewSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Button Link field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Button Link
   * - **API ID Path**: hero.default.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * Button Text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.buttonText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonText: prismic.KeyTextField;

  /**
   * Background Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.backgroundImage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  backgroundImage: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Image → Default → Primary*
 */
export interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Image → Banner → Primary*
 */
export interface ImageSliceBannerPrimary {
  /**
   * Image field in *Image → Banner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.banner.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Banner variation for Image Slice
 *
 * - **API ID**: `banner`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceBanner = prismic.SharedSliceVariation<
  "banner",
  Simplify<ImageSliceBannerPrimary>,
  never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceBanner;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;

/**
 * Primary content in *ImageCards → Default → Primary*
 */
export interface ImageCardsSliceDefaultPrimary {
  /**
   * Heading field in *ImageCards → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;
}

/**
 * Primary content in *ImageCards → Items*
 */
export interface ImageCardsSliceDefaultItem {
  /**
   * Image field in *ImageCards → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text field in *ImageCards → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.items[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Button Link field in *ImageCards → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.items[].buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * Button Text field in *ImageCards → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.items[].buttonText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonText: prismic.KeyTextField;
}

/**
 * Default variation for ImageCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: ImageCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageCardsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageCardsSliceDefaultPrimary>,
  Simplify<ImageCardsSliceDefaultItem>
>;

/**
 * Slice variation for *ImageCards*
 */
type ImageCardsSliceVariation = ImageCardsSliceDefault;

/**
 * ImageCards Shared Slice
 *
 * - **API ID**: `image_cards`
 * - **Description**: ImageCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageCardsSlice = prismic.SharedSlice<
  "image_cards",
  ImageCardsSliceVariation
>;

/**
 * Primary content in *NewsletterSignup → Default → Primary*
 */
export interface NewsletterSignupSliceDefaultPrimary {
  /**
   * Headline field in *NewsletterSignup → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Revolve News
   * - **API ID Path**: newsletter_signup.default.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headline: prismic.RichTextField;

  /**
   * Copy field in *NewsletterSignup → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Sign up for our email list and never miss an event again!
   * - **API ID Path**: newsletter_signup.default.primary.copy
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  copy: prismic.RichTextField;

  /**
   * Mailchimp Action URL field in *NewsletterSignup → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: https://revolveavl.us12.list-manage.com/subscribe/post?u=9656a8d7222f19b474060d83a&amp;id=1d2a995db9&amp;f_id=001c72e0f0
   * - **API ID Path**: newsletter_signup.default.primary.mailchimp_action_url
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  mailchimp_action_url: prismic.LinkField;

  /**
   * Background Color field in *NewsletterSignup → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Select a background color for this section.
   * - **API ID Path**: newsletter_signup.default.primary.background_color
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  background_color: prismic.SelectField<
    "putty" | "drywall" | "led" | "pollen" | "sawdust" | "astroturf"
  >;
}

/**
 * Default variation for NewsletterSignup Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsletterSignupSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NewsletterSignupSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NewsletterSignup*
 */
type NewsletterSignupSliceVariation = NewsletterSignupSliceDefault;

/**
 * NewsletterSignup Shared Slice
 *
 * - **API ID**: `newsletter_signup`
 * - **Description**: NewsletterSignup
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsletterSignupSlice = prismic.SharedSlice<
  "newsletter_signup",
  NewsletterSignupSliceVariation
>;

/**
 * Primary content in *Quote → Default → Primary*
 */
export interface QuoteSliceDefaultPrimary {
  /**
   * Quote field in *Quote → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quote.default.primary.quote
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  quote: prismic.RichTextField;

  /**
   * Source field in *Quote → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quote.default.primary.source
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  source: prismic.KeyTextField;
}

/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: Quote
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<QuoteSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Quote*
 */
type QuoteSliceVariation = QuoteSliceDefault;

/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: Quote
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSlice = prismic.SharedSlice<"quote", QuoteSliceVariation>;

/**
 * Primary content in *Text → Default → Primary*
 */
export interface TextSliceDefaultPrimary {
  /**
   * Text field in *Text → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Text → Two Columns → Primary*
 */
export interface TextSliceTwoColumnsPrimary {
  /**
   * Text field in *Text → Two Columns → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.twoColumns.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Two Columns variation for Text Slice
 *
 * - **API ID**: `twoColumns`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceTwoColumns = prismic.SharedSliceVariation<
  "twoColumns",
  Simplify<TextSliceTwoColumnsPrimary>,
  never
>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault | TextSliceTwoColumns;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;

/**
 * Primary content in *TextWithImage → Default → Primary*
 */
export interface TextWithImageSliceDefaultPrimary {
  /**
   * Text field in *TextWithImage → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *TextWithImage → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for TextWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextWithImageSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *TextWithImage → With Button → Primary*
 */
export interface TextWithImageSliceWithButtonPrimary {
  /**
   * Text field in *TextWithImage → With Button → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.withButton.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Button Link field in *TextWithImage → With Button → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.withButton.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * Button Text field in *TextWithImage → With Button → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.withButton.primary.buttonText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonText: prismic.KeyTextField;

  /**
   * Image field in *TextWithImage → With Button → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.withButton.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * With Button variation for TextWithImage Slice
 *
 * - **API ID**: `withButton`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceWithButton = prismic.SharedSliceVariation<
  "withButton",
  Simplify<TextWithImageSliceWithButtonPrimary>,
  never
>;

/**
 * Slice variation for *TextWithImage*
 */
type TextWithImageSliceVariation =
  | TextWithImageSliceDefault
  | TextWithImageSliceWithButton;

/**
 * TextWithImage Shared Slice
 *
 * - **API ID**: `text_with_image`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSlice = prismic.SharedSlice<
  "text_with_image",
  TextWithImageSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataSlicesSlice,
      EventDocument,
      EventDocumentData,
      EventDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      CallToActionSlice,
      CallToActionSliceDefaultPrimary,
      CallToActionSliceMarqueePrimary,
      CallToActionSliceVariation,
      CallToActionSliceDefault,
      CallToActionSliceMarquee,
      CoopMemberSlice,
      CoopMemberSliceDefaultPrimaryMemberItem,
      CoopMemberSliceDefaultPrimary,
      CoopMemberSliceVariation,
      CoopMemberSliceDefault,
      EventPreviewSlice,
      EventPreviewSliceDefaultPrimary,
      EventPreviewSliceVariation,
      EventPreviewSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ImageSlice,
      ImageSliceDefaultPrimary,
      ImageSliceBannerPrimary,
      ImageSliceVariation,
      ImageSliceDefault,
      ImageSliceBanner,
      ImageCardsSlice,
      ImageCardsSliceDefaultPrimary,
      ImageCardsSliceDefaultItem,
      ImageCardsSliceVariation,
      ImageCardsSliceDefault,
      NewsletterSignupSlice,
      NewsletterSignupSliceDefaultPrimary,
      NewsletterSignupSliceVariation,
      NewsletterSignupSliceDefault,
      QuoteSlice,
      QuoteSliceDefaultPrimary,
      QuoteSliceVariation,
      QuoteSliceDefault,
      TextSlice,
      TextSliceDefaultPrimary,
      TextSliceTwoColumnsPrimary,
      TextSliceVariation,
      TextSliceDefault,
      TextSliceTwoColumns,
      TextWithImageSlice,
      TextWithImageSliceDefaultPrimary,
      TextWithImageSliceWithButtonPrimary,
      TextWithImageSliceVariation,
      TextWithImageSliceDefault,
      TextWithImageSliceWithButton,
    };
  }
}
