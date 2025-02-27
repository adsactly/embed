/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Messages
// ====================================================

export interface Messages_channel_CategoryChannel {
  __typename: "CategoryChannel" | "VoiceChannel";
  id: string;
}

export interface Messages_channel_TextChannel_messages_author {
  __typename: "User";
  id: string;
  username: string;
  discriminator: string;
  avatarURL: string | null;
}

export interface Messages_channel_TextChannel_messages_reactions_emoji_CustomEmoji {
  __typename: "CustomEmoji";
  name: string;
  id: string;
  url: string;
}

export interface Messages_channel_TextChannel_messages_reactions_emoji_TextEmoji {
  __typename: "TextEmoji";
  name: string;
  utf8: string;
}

export type Messages_channel_TextChannel_messages_reactions_emoji = Messages_channel_TextChannel_messages_reactions_emoji_CustomEmoji | Messages_channel_TextChannel_messages_reactions_emoji_TextEmoji;

export interface Messages_channel_TextChannel_messages_reactions {
  __typename: "Reaction";
  count: number;
  emoji: Messages_channel_TextChannel_messages_reactions_emoji;
}

export interface Messages_channel_TextChannel_messages_attachments {
  __typename: "Attachment";
  url: string;
  height: number;
  width: number;
}

export interface Messages_channel_TextChannel_messages_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean;
}

export interface Messages_channel_TextChannel_messages_embeds_footer {
  __typename: "EmbedFooter";
  iconURL: string | null;
  proxyIconURL: string | null;
  text: string;
}

export interface Messages_channel_TextChannel_messages_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number;
  width: number;
  proxyURL: string;
  url: string;
}

export interface Messages_channel_TextChannel_messages_embeds_video {
  __typename: "EmbedVideo";
  height: number;
  width: number;
  url: string;
}

export interface Messages_channel_TextChannel_messages_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  hexColor: string | null;
  fields: Messages_channel_TextChannel_messages_embeds_fields[];
  footer: Messages_channel_TextChannel_messages_embeds_footer | null;
  thumbnail: Messages_channel_TextChannel_messages_embeds_thumbnail | null;
  video: Messages_channel_TextChannel_messages_embeds_video | null;
}

export interface Messages_channel_TextChannel_messages {
  __typename: "TextMessage";
  /**
   * Message ID
   */
  id: string;
  /**
   * Message timestamp
   */
  createdAt: any;
  /**
   * Message Author.
   */
  author: Messages_channel_TextChannel_messages_author;
  /**
   * Message content
   */
  content: string | null;
  /**
   * Time the message was edited
   */
  editedAt: any | null;
  /**
   * Message reactions
   */
  reactions: Messages_channel_TextChannel_messages_reactions[];
  /**
   * Message attachments
   */
  attachments: Messages_channel_TextChannel_messages_attachments[];
  /**
   * Message embeds
   */
  embeds: Messages_channel_TextChannel_messages_embeds[] | null;
}

export interface Messages_channel_TextChannel {
  __typename: "TextChannel";
  id: string;
  messages: Messages_channel_TextChannel_messages[] | null;
}

export type Messages_channel = Messages_channel_CategoryChannel | Messages_channel_TextChannel;

export interface Messages {
  channel: Messages_channel | null;
}

export interface MessagesVariables {
  channel: string;
  around?: string | null;
  before?: string | null;
  after?: string | null;
  limit?: number | null;
}
