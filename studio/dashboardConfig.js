export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecef4c5d3a0f68f5f0e09e7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-r63u1yqk',
                  apiId: '48957851-85c6-404d-a738-d36c45d1a374'
                },
                {
                  buildHookId: '5ecef4c6792e9611919a3104',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fykuckjo',
                  apiId: '348db78a-599a-47b7-a8c2-5006fd66bcdb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/spencerevison/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fykuckjo.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
