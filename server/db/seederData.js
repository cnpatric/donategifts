const bcrypt = require('bcrypt');

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const donorUser = {
  fName: 'John',
  lName: 'Doe',
  email: 'johndoe1@gmail.com',
  emailVerified: true,
  verificationHash: 'randomString1',
  userRole: 'donor',
  password: bcrypt.hashSync('johndoe1!', 10),
  joined: Date.now(),
  aboutMe: 'A person passion to help kids of all ages.',
  loginMode: 'default',
};

const partnerUser = {
  fName: 'John',
  lName: 'Doe',
  email: 'johndoe2@gmail.com',
  emailVerified: true,
  verificationHash: 'randomString2',
  userRole: 'partner',
  password: bcrypt.hashSync('johndoe2!', 10),
  joined: Date.now(),
  aboutMe: 'A person passion to help kids of all ages.',
  loginMode: 'default',
};

const adminUser = {
  fName: 'John',
  lName: 'Doe',
  email: 'johndoe3@gmail.com',
  emailVerified: true,
  verificationHash: 'randomString3',
  userRole: 'admin',
  password: bcrypt.hashSync('johndoe3!', 10),
  joined: Date.now(),
  aboutMe: 'A person passion to help kids of all ages.',
  loginMode: 'default',
};

const wishcards = [
  {
    approvedByAdmin: true,
    childFirstName: 'Patric',
    childLastName: 'Princess',
    childInterest: 'playing video games',
    wishItemName: 'Amazon Gift Card LOL',
    wishCardImage: 'https://source.unsplash.com/random/400x400',
    wishItemURL:
      'https://www.amazon.com/gp/item-dispatch?registryID.1=25G0Z099HL6MM&registryItemID.1=I1O9RO1YPYHIAY&offeringID.1=MQVghiAmdPee43XLIJC7O6kWUui9P98LhUCjO0h40whWzMUZCD7cEt0fKU%252BHR1EGx%252Fo28ERQSrDbhtckSAslzk0c97WwWaXJiWXNjy6X3Aidfe6cpu1OR6K9KNs1s6Jmlk8DBvPUg%252F2HZgxckwFTQipnJfDHLce%252FjNpFnk7FGJRbuiw2d0DE7w%253D%253D&session-id=146-5423461-6179443&isGift=0&submit.addToCart=1&quantity.1=1&ref_=lv_ov_lig_pab',
    wishItemPrice: '40',
    childStory: 'Kid that needs a gift for the holidays',
    deliveryDate: Date.now(),
    occasion: 'Some Occasion',
    address: {
      address1: '1337 leet road',
      city: 'Magic Kingdom',
      state: 'Florida',
      country: 'Merica',
      zipcode: '78452',
    },
    status: 'donated',
    childBirthday: randomDate(
      new Date('October 01, 2000 10:00:00'),
      new Date('October 01, 2010 10:00:00'),
    ),
    createdAt: randomDate(new Date('October 01, 2020 10:00:00'), new Date()),
  },
  {
    approvedByAdmin: true,
    childFirstName: 'Patric',
    childLastName: 'Princess',
    childInterest: 'playing video games',
    wishItemName: 'Amazon Gift Card LOL',
    wishCardImage: 'https://source.unsplash.com/random/400x400',
    wishItemURL:
      'https://www.amazon.com/gp/item-dispatch?registryID.1=25G0Z099HL6MM&registryItemID.1=I1O9RO1YPYHIAY&offeringID.1=MQVghiAmdPee43XLIJC7O6kWUui9P98LhUCjO0h40whWzMUZCD7cEt0fKU%252BHR1EGx%252Fo28ERQSrDbhtckSAslzk0c97WwWaXJiWXNjy6X3Aidfe6cpu1OR6K9KNs1s6Jmlk8DBvPUg%252F2HZgxckwFTQipnJfDHLce%252FjNpFnk7FGJRbuiw2d0DE7w%253D%253D&session-id=146-5423461-6179443&isGift=0&submit.addToCart=1&quantity.1=1&ref_=lv_ov_lig_pab',
    wishItemPrice: '40',
    childStory: 'Kid that needs a gift for the holidays',
    deliveryDate: Date.now(),
    occasion: 'Some Occasion',
    address: {
      address1: '1337 leet road',
      city: 'Magic Kingdom',
      state: 'Florida',
      country: 'Merica',
      zipcode: '78452',
    },
    status: 'published',
    childBirthday: randomDate(
      new Date('October 01, 2000 10:00:00'),
      new Date('October 01, 2010 10:00:00'),
    ),
    createdAt: randomDate(new Date('October 01, 2020 10:00:00'), new Date()),
  },
  {
    approvedByAdmin: true,
    childFirstName: 'Markell',
    childLastName: 'Princess',
    childInterest: 'playing video games',
    wishItemName: 'Amazon Gift Card LOL',
    wishCardImage: 'https://source.unsplash.com/random/400x400',
    wishItemURL: 'https://www.google.com',
    wishItemPrice: '40',
    childStory: 'Kid that needs a gift for the holidays',
    deliveryDate: Date.now(),
    occasion: 'Some Occasion',
    address: {
      address1: '1337 leet road',
      city: 'Magic Kingdom',
      state: 'Florida',
      country: 'Merica',
      zipcode: '78452',
    },
    status: 'donated',
    age: 21,
    childBirthday: randomDate(
      new Date('October 01, 2000 10:00:00'),
      new Date('October 01, 2010 10:00:00'),
    ),
    createdAt: randomDate(new Date('October 01, 2020 10:00:00'), new Date()),
  },
  {
    approvedByAdmin: true,
    childFirstName: 'Maria',
    childLastName: 'Princess',
    childInterest: 'playing video games',
    wishItemName: 'Amazon Gift Card LOL',
    wishCardImage: 'https://source.unsplash.com/random/400x400',
    wishItemURL: 'https://www.google.com',
    wishItemPrice: '40',
    childStory: 'Kid that needs a gift for the holidays',
    deliveryDate: Date.now(),
    occasion: 'Some Occasion',
    address: {
      address1: '1337 leet road',
      city: 'Magic Kingdom',
      state: 'Florida',
      country: 'Merica',
      zipcode: '78452',
    },
    status: 'donated',
    childBirthday: randomDate(
      new Date('October 01, 2000 10:00:00'),
      new Date('October 01, 2010 10:00:00'),
    ),
    createdAt: randomDate(new Date('October 01, 2020 10:00:00'), new Date()),
  },
  {
    approvedByAdmin: true,
    childFirstName: 'Guts',
    childLastName: 'Princess',
    childInterest: 'playing video games',
    wishItemName: 'Amazon Gift Card LOL',
    wishCardImage: 'https://source.unsplash.com/random/400x400',
    wishItemURL: 'https://www.google.com',
    wishItemPrice: '40',
    childStory: 'Kid that needs a gift for the holidays',
    deliveryDate: Date.now(),
    occasion: 'Some Occasion',
    address: {
      address1: '1337 leet road',
      city: 'Magic Kingdom',
      state: 'Florida',
      country: 'Merica',
      zipcode: '78452',
    },
    status: 'donated',
    childBirthday: randomDate(
      new Date('October 01, 2000 10:00:00'),
      new Date('October 01, 2010 10:00:00'),
    ),
    createdAt: randomDate(new Date('October 01, 2020 10:00:00'), new Date()),
  },
  {
    approvedByAdmin: true,
    childFirstName: 'Elsa',
    childLastName: 'princess',
    childInterest: 'playing video games',
    wishItemName: 'Amazon Gift Card LOL',
    wishCardImage: 'https://source.unsplash.com/random/400x400',
    wishItemURL:
      'https://www.amazon.com/gp/item-dispatch?registryID.1=1G59GOMP7TWWL&registryItemID.1=I2GEAHF4IG70OQ&offeringID.1=KOpMfeBdDkwVCEdd3iLwzcg%252BuAvNV1yFQZ4WZd6zANLbt0Yru%252B8qTa1ZhDPOyCGOMjrUHXJWyEhpF6T5xvKmzUSfD5YbyHRIT3bHBPKYK6zijeQf31xLEVIi8D0bM8qiBozSqXn%252FXQh7U0AoYxlwiA8TbpZUxoXtnEcPKkZucW4UvD8SlLCakLpkDlzhG02X&session-id=146-5423461-6179443&isGift=0&submit.addToCart=1&quantity.1=1&ref_=lv_ov_lig_pab',
    wishItemPrice: '40',
    childStory: 'Kid that needs a gift for the holidays',
    deliveryDate: Date.now(),
    occasion: 'Some Occasion',
    address: {
      address1: '1337 leet road',
      city: 'Magic Kingdom',
      state: 'Florida',
      country: 'Merica',
      zipcode: '78452',
    },
    status: 'draft',
    childBirthday: randomDate(
      new Date('October 01, 2000 10:00:00'),
      new Date('October 01, 2010 10:00:00'),
    ),
    createdAt: randomDate(new Date('October 01, 2020 10:00:00'), new Date()),
  },
  {
    approvedByAdmin: true,
    childFirstName: 'Marco',
    childLastName: 'Princess',
    childInterest: 'playing video games',
    wishItemName: 'Amazon Gift Card LOL',
    wishCardImage: 'https://source.unsplash.com/random/400x400',
    wishItemURL:
      'https://www.amazon.com/gp/item-dispatch?registryID.1=1G59GOMP7TWWL&registryItemID.1=I2GEAHF4IG70OQ&offeringID.1=KOpMfeBdDkwVCEdd3iLwzcg%252BuAvNV1yFQZ4WZd6zANLbt0Yru%252B8qTa1ZhDPOyCGOMjrUHXJWyEhpF6T5xvKmzUSfD5YbyHRIT3bHBPKYK6zijeQf31xLEVIi8D0bM8qiBozSqXn%252FXQh7U0AoYxlwiA8TbpZUxoXtnEcPKkZucW4UvD8SlLCakLpkDlzhG02X&session-id=146-5423461-6179443&isGift=0&submit.addToCart=1&quantity.1=1&ref_=lv_ov_lig_pab',
    wishItemPrice: '40',
    childStory: 'Kid that needs a gift for the holidays',
    deliveryDate: Date.now(),
    occasion: 'Some Occasion',
    address: {
      address1: '1337 leet road',
      city: 'Magic Kingdom',
      state: 'Florida',
      country: 'Merica',
      zipcode: '78452',
    },
    status: 'draft',
    childBirthday: randomDate(
      new Date('October 01, 2000 10:00:00'),
      new Date('October 01, 2010 10:00:00'),
    ),
    createdAt: randomDate(new Date('October 01, 2020 10:00:00'), new Date()),
  },
  {
    approvedByAdmin: true,
    childFirstName: 'Stacey',
    childLastName: 'Princess',
    childInterest: 'playing video games',
    wishItemName: 'Amazon Gift Card LOL',
    wishCardImage: 'https://source.unsplash.com/random/400x400',
    wishItemURL: 'https://www.google.com',
    wishItemPrice: '40',
    childStory: 'Kid that needs a gift for the holidays',
    deliveryDate: Date.now(),
    occasion: 'Some Occasion',
    address: {
      address1: '1337 leet road',
      city: 'Magic Kingdom',
      state: 'Florida',
      country: 'Merica',
      zipcode: '78452',
    },
    status: 'published',
    childBirthday: randomDate(
      new Date('October 01, 2000 10:00:00'),
      new Date('October 01, 2010 10:00:00'),
    ),
    createdAt: randomDate(new Date('October 01, 2020 10:00:00'), new Date()),
  },
  {
    approvedByAdmin: true,
    childFirstName: 'Tokkiko',
    childLastName: 'Princess',
    childInterest: 'playing video games',
    wishItemName: 'Amazon Gift Card LOL',
    wishCardImage: 'https://source.unsplash.com/random/400x400',
    wishItemURL: 'https://www.google.com',
    wishItemPrice: '40',
    childStory: 'Kid that needs a gift for the holidays',
    deliveryDate: Date.now(),
    occasion: 'Some Occasion',
    address: {
      address1: '1337 leet road',
      city: 'Magic Kingdom',
      state: 'Florida',
      country: 'Merica',
      zipcode: '78452',
    },
    status: 'published',
    childBirthday: randomDate(
      new Date('October 01, 2000 10:00:00'),
      new Date('October 01, 2010 10:00:00'),
    ),
    createdAt: randomDate(new Date('October 01, 2020 10:00:00'), new Date()),
  },
  {
    approvedByAdmin: true,
    childFirstName: 'Deep',
    childLastName: 'Princess',
    childInterest: 'playing video games',
    wishItemName: 'Amazon Gift Card LOL',
    wishCardImage: 'https://source.unsplash.com/random/400x400',
    wishItemURL: 'https://www.google.com',
    wishItemPrice: '40',
    childStory: 'Kid that needs a gift for the holidays',
    deliveryDate: Date.now(),
    occasion: 'Some Occasion',
    address: {
      address1: '1337 leet road',
      city: 'Magic Kingdom',
      state: 'Florida',
      country: 'Merica',
      zipcode: '78452',
    },
    status: 'draft',
    childBirthday: randomDate(
      new Date('October 01, 2000 10:00:00'),
      new Date('October 01, 2010 10:00:00'),
    ),
    createdAt: randomDate(new Date('October 01, 2020 10:00:00'), new Date()),
  },
  {
    approvedByAdmin: true,
    childFirstName: 'Filip',
    childLastName: 'Princess',
    childInterest: 'playing video games',
    wishItemName: 'Amazon Gift Card LOL',
    wishCardImage: 'https://source.unsplash.com/random/400x400',
    wishItemURL: 'https://www.google.com',
    wishItemPrice: '40',
    childStory: 'Kid that needs a gift for the holidays',
    deliveryDate: Date.now(),
    occasion: 'Some Occasion',
    address: {
      address1: '1337 leet road',
      city: 'Magic Kingdom',
      state: 'Florida',
      country: 'Merica',
      zipcode: '78452',
    },
    status: 'published',
    childBirthday: randomDate(
      new Date('October 01, 2000 10:00:00'),
      new Date('October 01, 2010 10:00:00'),
    ),
    createdAt: randomDate(new Date('October 01, 2020 10:00:00'), new Date()),
  },
  {
    approvedByAdmin: true,
    childFirstName: 'Karen',
    childLastName: 'Princess',
    childInterest: 'playing video games',
    wishItemName: 'Amazon Gift Card LOL',
    wishCardImage: 'https://source.unsplash.com/random/400x400',
    wishItemURL: 'https://www.google.com',
    wishItemPrice: '40',
    childStory: 'Kid that needs a gift for the holidays',
    deliveryDate: Date.now(),
    occasion: 'Some Occasion',
    address: {
      address1: '1337 leet road',
      city: 'Magic Kingdom',
      state: 'Florida',
      country: 'Merica',
      zipcode: '78452',
    },
    status: 'draft',
    childBirthday: randomDate(
      new Date('October 01, 2000 10:00:00'),
      new Date('October 01, 2010 10:00:00'),
    ),
    createdAt: randomDate(new Date('October 01, 2020 10:00:00'), new Date()),
  },
  {
    approvedByAdmin: true,
    childFirstName: 'Bubba',
    childLastName: 'Princess',
    childInterest: 'playing video games',
    wishItemName: 'Amazon Gift Card LOL',
    wishCardImage: 'https://source.unsplash.com/random/400x400',
    wishItemURL: 'https://www.google.com',
    wishItemPrice: '40',
    childStory: 'Kid that needs a gift for the holidays',
    deliveryDate: Date.now(),
    occasion: 'Some Occasion',
    address: {
      address1: '1337 leet road',
      city: 'Magic Kingdom',
      state: 'Florida',
      country: 'Merica',
      zipcode: '78452',
    },
    status: 'published',
    childBirthday: randomDate(
      new Date('October 01, 2000 10:00:00'),
      new Date('October 01, 2010 10:00:00'),
    ),
    createdAt: randomDate(new Date('October 01, 2020 10:00:00'), new Date()),
  },
];

const agency = {
  agencyName: 'SaveDaKids',
  agencyWebsite: 'savedakids.com',
  agencyPhone: '281-330-8004',
  agencyBio: 'Comitted to saving the kids!',
  agencyAddress: {
    address1: '911 cops road',
    address2: '311 Amber Dr',
    city: 'Epcot',
    state: 'Florida',
    country: 'Merica',
    zipcode: '78452',
  },
  childrenUnderCare: 15,
  childrenAgeRange: '1-18',
  joined: Date.now(),
  isVerified: true,
  agencyProfileImage: 'https://source.unsplash.com/random/400x400',
};

const allUsers = { donorUser, partnerUser, adminUser };

module.exports = { allUsers, wishcards, agency };
