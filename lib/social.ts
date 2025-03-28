export async function shareToSocialMedia(
  platforms: string[],
  content: string,
  images: string[],
  options?: {
    facebookText?: string
    instagramText?: string
    instagramHashtags?: string
  },
) {
  try {
    const response = await fetch("/api/social", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        platforms,
        content,
        images,
        options,
      }),
    })

    return await response.json()
  } catch (error) {
    console.error("Social media sharing error:", error)
    throw error
  }
}

