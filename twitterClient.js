import { TwitterApi } from "twitter-api-v2";

const apiKey = "H2DuJ3N3hJQ7zH34bFzm3s7rd";
const apiKeySecret = "h1lFr9cHQjlUvvqLOUwebwltXF41GXPaYk7CwQ5ZQ6WsX43pFv";
const bearer =
  "AAAAAAAAAAAAAAAAAAAAAAGxhQEAAAAAXJ8EQSvWHehZ1qAu1KUIApHhSWo%3DTQsQ4tT6SzgnRKKZvjzD3S7Z0twEFAPAt9G8M8IXlsqrxIVYeK";
const accessToken = "1573037529682649089-mvjm6jHGLiEaqcu97dh9L2f6gqQcIV";
const accessTokenSecret = "UFjxCTez22Q4HsbFNcIJY0BxeXNdMr3bSsqdhqxfMaTI5";

const clientId = "OWF5OVlMcnNPZlZxeVc5SWNEQWQ6MTpjaQ";
const clientSecret = "B59GCX2pt72eE4lz-TLEviftvGPyUz1YyS2roFJ6s7GGOSUprT";

const client = new TwitterApi({
  appKey: apiKey,
  appSecret: apiKeySecret,
  accessToken: accessToken,
  accessSecret: accessTokenSecret,
});

const rwClient = client.readWrite;

export default rwClient;
