export default {
  prices: [
    { value: '0-300000', title: '0 - 300 ribu' },
    { value: '300001-700000', title: '300 - 700 ribu' },
    { value: '700001-1000000', title: '700 - 1 juta' },
    { value: '1000001-10000000', title: '> 1 juta' },
  ],
  locations: [
    { id: 123, name: 'Yogyakarta' },
    { id: 124, name: 'Solo' },
    { id: 125, name: 'Klaten' },
    { id: 126, name: 'Bojonegoro' },
  ],
  genders: [
    { id: 1, name: 'Putra' },
    { id: 2, name: 'Putri' },
    { id: 3, name: 'Campur' },
  ],
  kosts: [
    {
      location: 123,
      price: 250000,
      gender: 1,
      title: 'Kost putra murah dekat UGM',
      description: 'Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus.',
      imageUrl: 'static/images/BNfx7ELJ-360x480.jpg',
    },
    {
      location: 123,
      price: 300000,
      gender: 1,
      title: 'Kost murah dekat Mercubuana',
      description: 'Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus.',
      imageUrl: 'static/images/BNfx7ELJ-360x480.jpg',
    },
    {
      location: 123,
      price: 500000,
      gender: 1,
      title: 'Kost mahasiswa eksklusif',
      description: 'Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus.',
      imageUrl: 'static/images/BNfx7ELJ-360x480.jpg',
    },
    {
      location: 123,
      price: 400000,
      gender: 1,
      title: 'Kost Mahasiswa Muslim Condongcatur',
      description: 'Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.',
      imageUrl: 'static/images/HrjRCIwT-360x480.jpg',
    },
    {
      location: 123,
      price: 700000,
      gender: 3,
      title: 'Kost Campur Condongcatur',
      description: 'Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.',
      imageUrl: 'static/images/uYBURYIq-360x480.jpg',
    },
    {
      location: 124,
      price: 700000,
      gender: 1,
      title: 'Kost Putra Solo',
      description: 'Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.',
      imageUrl: 'static/images/HrjRCIwT-360x480.jpg',
    },
    {
      location: 124,
      price: 700000,
      gender: 2,
      title: 'Kost Putri Solo',
      description: 'Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.',
      imageUrl: 'static/images/uYBURYIq-360x480.jpg',
    },
    {
      location: 125,
      price: 800000,
      gender: 1,
      title: 'Kost Putra eksklusif di Klaten',
      description: 'Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.',
      imageUrl: 'static/images/BNfx7ELJ-360x480.jpg',
    },
    {
      location: 125,
      price: 500000,
      gender: 2,
      title: 'Kost Putri Klaten',
      description: 'Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.',
      imageUrl: 'static/images/HrjRCIwT-360x480.jpg',
    },
    {
      location: 123,
      price: 260000,
      gender: 1,
      title: 'Kost Putra murah banget',
      description: 'Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.',
      imageUrl: 'static/images/uYBURYIq-360x480.jpg',
    },
    {
      location: 123,
      price: 290000,
      gender: 1,
      title: 'Kost Putra bebas sopan',
      description: 'Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.',
      imageUrl: 'static/images/HrjRCIwT-360x480.jpg',
    },
  ],
  slides: [
    {
      image: 'static/images/BNfx7ELJ-360x480.jpg',
      title: 'Slide 1',
    },
    {
      image: 'static/images/HrjRCIwT-360x480.jpg',
      title: 'Slide 2',
    },
    {
      image: 'static/images/uYBURYIq-360x480.jpg',
      title: 'Slide 3',
    },
    {
      image: 'static/images/HrjRCIwT-360x480.jpg',
      title: 'Slide 4',
    },
  ],

  getGender(id) {
    return this.genders.map(g => g === id);
  },
};