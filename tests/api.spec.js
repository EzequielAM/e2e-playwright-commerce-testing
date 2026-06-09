const { test, expect } = require('@playwright/test');

test.describe('API Testing Framework - HTTPBin API', () => {
  const baseURL = 'https://httpbin.org';

  test('Get - Should retrieve data and validate response structure', async ({ request }) => {

    const response = await request.get(`${baseURL}/json`);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();


    expect(responseBody).toHaveProperty('slideshow');
    const slideshow = responseBody.slideshow;
    expect(slideshow).toHaveProperty('author');
    expect(slideshow).toHaveProperty('title');
    expect(slideshow).toHaveProperty('slides');


    expect(slideshow.slides.length).toBeGreaterThan(0);
    expect(slideshow.slides[0]).toHaveProperty('title');
    expect(slideshow.slides[0]).toHaveProperty('type');
  });

  test('Post - Should create a new user and validate response data', async ({ request }) => {
    const userPayload = {
      name: 'Ezequiel Muñoz',
      job: 'QA Software Engineer'
    };


    const response = await request.post(`${baseURL}/post`, { data: userPayload });
    expect(response.status()).toBe(200);

    const responseBody = await response.json();


    expect(responseBody).toHaveProperty('json');
    expect(responseBody.json.name).toBe(userPayload.name);
    expect(responseBody.json.job).toBe(userPayload.job);
  });

  test('Put - Should update an existing user and validate response', async ({ request }) => {
    const userPayload = {
      name: 'Ezequiel Muñoz',
      job: 'QA Software Engineer'
    };


    const response = await request.put(`${baseURL}/put`, { data: userPayload });
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.json.name).toBe(userPayload.name);
    expect(responseBody.json.job).toBe(userPayload.job);
  });

  test('Delete - Should delete an existing user and validate response', async ({ request }) => {

    const response = await request.delete(`${baseURL}/delete`);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.url).toBe(`${baseURL}/delete`);
  });
});
