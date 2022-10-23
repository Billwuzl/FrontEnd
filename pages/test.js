function uploadToIPFS() {
    const metaData = {
      content: 'job',
      description: 'job',
      name: `Post by @ employer`,
      //external_url: `https://lenster.xyz/u/${profile.handle}`,
      metadata_id: '7aaa17fb-bf39-4c3a-af15-84175602c834',
      createdOn: new Date().toISOString(),
      version: "1.0.0",
        image: null,
    imageMimeType: null,
    mainContentFocus: "TEXT",
    contentWarning: null,
    location: '',
    cover_picture: '',
    attributes: [
    {
        traitType: "string",
        key: "type",
        value: "post"
    }
    ],
    media: [],
    appId: "NaderDabitLensStarter"
    }
    
    return JSON.stringify(metaData)
  }
console.log(uploadToIPFS())