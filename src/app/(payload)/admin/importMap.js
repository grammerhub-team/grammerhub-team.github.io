import { RichTextCell as RichTextCell_0 } from '@payloadcms/richtext-lexical/client'
import { RichTextField as RichTextField_1 } from '@payloadcms/richtext-lexical/client'
import { getGenerateComponentMap as getGenerateComponentMap_2 } from '@payloadcms/richtext-lexical/generateComponentMap'
import { InlineToolbarFeatureClient as InlineToolbarFeatureClient_3 } from '@payloadcms/richtext-lexical/client'
import { FixedToolbarFeatureClient as FixedToolbarFeatureClient_4 } from '@payloadcms/richtext-lexical/client'
import { HeadingFeatureClient as HeadingFeatureClient_5 } from '@payloadcms/richtext-lexical/client'
import { BoldFeatureClient as BoldFeatureClient_6 } from '@payloadcms/richtext-lexical/client'
import { ItalicFeatureClient as ItalicFeatureClient_7 } from '@payloadcms/richtext-lexical/client'
import { UnderlineFeatureClient as UnderlineFeatureClient_8 } from '@payloadcms/richtext-lexical/client'
import { StrikethroughFeatureClient as StrikethroughFeatureClient_9 } from '@payloadcms/richtext-lexical/client'
import { SubscriptFeatureClient as SubscriptFeatureClient_10 } from '@payloadcms/richtext-lexical/client'
import { SuperscriptFeatureClient as SuperscriptFeatureClient_11 } from '@payloadcms/richtext-lexical/client'
import { InlineCodeFeatureClient as InlineCodeFeatureClient_12 } from '@payloadcms/richtext-lexical/client'
import { ParagraphFeatureClient as ParagraphFeatureClient_13 } from '@payloadcms/richtext-lexical/client'
import { AlignFeatureClient as AlignFeatureClient_14 } from '@payloadcms/richtext-lexical/client'
import { IndentFeatureClient as IndentFeatureClient_15 } from '@payloadcms/richtext-lexical/client'
import { UnorderedListFeatureClient as UnorderedListFeatureClient_16 } from '@payloadcms/richtext-lexical/client'
import { OrderedListFeatureClient as OrderedListFeatureClient_17 } from '@payloadcms/richtext-lexical/client'
import { ChecklistFeatureClient as ChecklistFeatureClient_18 } from '@payloadcms/richtext-lexical/client'
import { LinkFeatureClient as LinkFeatureClient_19 } from '@payloadcms/richtext-lexical/client'
import { RelationshipFeatureClient as RelationshipFeatureClient_20 } from '@payloadcms/richtext-lexical/client'
import { BlockquoteFeatureClient as BlockquoteFeatureClient_21 } from '@payloadcms/richtext-lexical/client'
import { UploadFeatureClient as UploadFeatureClient_22 } from '@payloadcms/richtext-lexical/client'
import { HorizontalRuleFeatureClient as HorizontalRuleFeatureClient_23 } from '@payloadcms/richtext-lexical/client'
import { OverviewComponent as OverviewComponent_24 } from '@payloadcms/plugin-seo/client'
import { MetaTitleComponent as MetaTitleComponent_25 } from '@payloadcms/plugin-seo/client'
import { MetaImageComponent as MetaImageComponent_26 } from '@payloadcms/plugin-seo/client'
import { MetaDescriptionComponent as MetaDescriptionComponent_27 } from '@payloadcms/plugin-seo/client'
import { PreviewComponent as PreviewComponent_28 } from '@payloadcms/plugin-seo/client'
import { SlugComponent as SlugComponent_29 } from '@/fields/slug/SlugComponent'
import { BlocksFeatureClient as BlocksFeatureClient_30 } from '@payloadcms/richtext-lexical/client'
import { default as default_31 } from '@/components/BeforeDashboard'
import { default as default_32 } from '@/components/BeforeLogin'

export const importMap = {
  "@payloadcms/richtext-lexical/client#RichTextCell": RichTextCell_0,
  "@payloadcms/richtext-lexical/client#RichTextField": RichTextField_1,
  "@payloadcms/richtext-lexical/generateComponentMap#getGenerateComponentMap": getGenerateComponentMap_2,
  "@payloadcms/richtext-lexical/client#InlineToolbarFeatureClient": InlineToolbarFeatureClient_3,
  "@payloadcms/richtext-lexical/client#FixedToolbarFeatureClient": FixedToolbarFeatureClient_4,
  "@payloadcms/richtext-lexical/client#HeadingFeatureClient": HeadingFeatureClient_5,
  "@payloadcms/richtext-lexical/client#BoldFeatureClient": BoldFeatureClient_6,
  "@payloadcms/richtext-lexical/client#ItalicFeatureClient": ItalicFeatureClient_7,
  "@payloadcms/richtext-lexical/client#UnderlineFeatureClient": UnderlineFeatureClient_8,
  "@payloadcms/richtext-lexical/client#StrikethroughFeatureClient": StrikethroughFeatureClient_9,
  "@payloadcms/richtext-lexical/client#SubscriptFeatureClient": SubscriptFeatureClient_10,
  "@payloadcms/richtext-lexical/client#SuperscriptFeatureClient": SuperscriptFeatureClient_11,
  "@payloadcms/richtext-lexical/client#InlineCodeFeatureClient": InlineCodeFeatureClient_12,
  "@payloadcms/richtext-lexical/client#ParagraphFeatureClient": ParagraphFeatureClient_13,
  "@payloadcms/richtext-lexical/client#AlignFeatureClient": AlignFeatureClient_14,
  "@payloadcms/richtext-lexical/client#IndentFeatureClient": IndentFeatureClient_15,
  "@payloadcms/richtext-lexical/client#UnorderedListFeatureClient": UnorderedListFeatureClient_16,
  "@payloadcms/richtext-lexical/client#OrderedListFeatureClient": OrderedListFeatureClient_17,
  "@payloadcms/richtext-lexical/client#ChecklistFeatureClient": ChecklistFeatureClient_18,
  "@payloadcms/richtext-lexical/client#LinkFeatureClient": LinkFeatureClient_19,
  "@payloadcms/richtext-lexical/client#RelationshipFeatureClient": RelationshipFeatureClient_20,
  "@payloadcms/richtext-lexical/client#BlockquoteFeatureClient": BlockquoteFeatureClient_21,
  "@payloadcms/richtext-lexical/client#UploadFeatureClient": UploadFeatureClient_22,
  "@payloadcms/richtext-lexical/client#HorizontalRuleFeatureClient": HorizontalRuleFeatureClient_23,
  "@payloadcms/plugin-seo/client#OverviewComponent": OverviewComponent_24,
  "@payloadcms/plugin-seo/client#MetaTitleComponent": MetaTitleComponent_25,
  "@payloadcms/plugin-seo/client#MetaImageComponent": MetaImageComponent_26,
  "@payloadcms/plugin-seo/client#MetaDescriptionComponent": MetaDescriptionComponent_27,
  "@payloadcms/plugin-seo/client#PreviewComponent": PreviewComponent_28,
  "@/fields/slug/SlugComponent#SlugComponent": SlugComponent_29,
  "@payloadcms/richtext-lexical/client#BlocksFeatureClient": BlocksFeatureClient_30,
  "@/components/BeforeDashboard#default": default_31,
  "@/components/BeforeLogin#default": default_32
}
