const projectData = {
    'project1': {
        title: 'Robotic Arm',
        description: 'A render that I made with the BlenderBros hard surface modelling jump start course. Not much to it.',
        image: 'img/profile.png'
    },
    'project2': {
        title: 'Smart Bin',
        description: 'A concept for a smart bin made for Cornerstones. It was based on the smart bin from Simplehuman, but with a few changes, such as app control, bag sealing, and notifications when the bin is full. It was also made in Blender.',
        image: 'img/bin(final-1.1).png',
    },
    'project3': {
        title: 'iPhone 17 Max',
        description: 'A 3d model of the iPhone Pro, made in Blender for a cornerstones project. Rendered with cycles. This was also the first time I used meshmachine in Blender.',
        image: 'img/iphone-17-max-(4).png'
    },
    'project4': {
        title: 'Portfolio Website',
        description: 'Static portfolio website as a STEMinn project. Features some javascript/jquery.',
        image: 'img/portfolio.png',
    },
    'project5': {
        title: 'Steminn Reverse Engineering Website',
        description: 'A basic static website made to display the products I reverse engineered for STEMinn. It\'s not the best, but it works.',
        image: 'img/steminn-website.jpg',
    },
    'project6': {
        title: 'Data collection form',
        description: 'Website made to collect data for my Cornerstones PD project. Form is nothing special since it was coded with AI, but I learned a lot about web development and backend development through that project.',
        image: 'img/ui-dashboard.jpg',
    }
};

$(document).ready(function() {
    console.log('jQuery is working');
    console.log('Found selectors:', $('.works-selector').length);
    
    $('.works-selector').on('click', function(){
        $('.works-selector').css('opacity', '0.2');
        $(this).css('opacity', '1');
        let projectKey = '';
        if ($(this).hasClass('work1')) projectKey = 'project1';
        else if ($(this).hasClass('work2')) projectKey = 'project2';
        else if ($(this).hasClass('work3')) projectKey = 'project3';
        else if ($(this).hasClass('work4')) projectKey = 'project4';
        else if ($(this).hasClass('work5')) projectKey = 'project5';
        else if ($(this).hasClass('work6')) projectKey = 'project6';

        const project = projectData[projectKey];
        
        let content = '<div class="project-images"><img class="project-img" src="' + project.image + '"></div>';
        content += '<div class="project-info">';
        content += '<h2 class="project-title">' + project.title + '</h2>';
        content += '<p class="project-description">' + project.description + '</p>';
        content += '</div>';
        $('.works-content').html(content);
    });
    
    $('.works-selector').first().trigger('click');
});