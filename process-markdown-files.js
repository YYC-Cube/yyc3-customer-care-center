const fs = require('fs');
const path = require('path');

// Get all markdown files from the glob result
const markdownFiles = [
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-CICD-GUIDE.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-审核报告/YYC3-CCC-项目标准化审核报告.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-安装指南.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-系统简介.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-文档同步机制.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-文档映射目录.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-用户手册/README.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-测试文档/README.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/072-YYC3-CCC-API文档-测试用例-接口自动化测试脚本.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/073-YYC3-CCC-API文档-预留文档位01.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/069-YYC3-CCC-API文档-第三方-Spline集成接口.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-架构设计/README.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/README.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-部署运维/098-YYC3-CCC-部署运维-故障处理文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-部署运维/099-YYC3-CCC-部署运维-预留文档位01.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-部署运维/README.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-用户手册/101-YYC3-CCC-用户手册-功能使用手册.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-用户手册/103-YYC3-CCC-用户手册-常见问题解答.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-用户手册/100-YYC3-CCC-用户手册-快速开始指南.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-用户手册/102-YYC3-CCC-用户手册-配置说明文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-用户手册/105-YYC3-CCC-用户手册-预留文档位01.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-用户手册/104-YYC3-CCC-用户手册-故障排除指南.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-部署运维/090-YYC3-CCC-部署运维-部署方案文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-部署运维/091-YYC3-CCC-部署运维-CI/CD配置文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-部署运维/096-YYC3-CCC-部署运维-性能优化文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-部署运维/092-YYC3-CCC-部署运维-环境配置文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-部署运维/093-YYC3-CCC-部署运维-监控告警文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-部署运维/094-YYC3-CCC-部署运维-日志管理文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-部署运维/095-YYC3-CCC-部署运维-备份恢复文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-部署运维/097-YYC3-CCC-部署运维-安全加固文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-测试文档/087-YYC3-CCC-测试文档-测试用例管理.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-测试文档/088-YYC3-CCC-测试文档-测试数据管理.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-测试文档/089-YYC3-CCC-测试文档-预留文档位01.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-测试文档/086-YYC3-CCC-测试文档-兼容性测试方案.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-测试文档/085-YYC3-CCC-测试文档-安全测试方案.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-类型定义/076-YYC3-CCC-类型定义-前端-请求响应数据类型.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-类型定义/077-YYC3-CCC-类型定义-业务模块-用户类型字典.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-类型定义/README.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-类型定义/080-YYC3-CCC-类型定义-预留文档位01.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-类型定义/079-YYC3-CCC-类型定义-业务模块-定价类型字典.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-类型定义/078-YYC3-CCC-类型定义-业务模块-服务类型约束.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-测试文档/084-YYC3-CCC-测试文档-性能测试方案.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-测试文档/081-YYC3-CCC-测试文档-单元测试规范.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-测试文档/083-YYC3-CCC-测试文档-E2E测试规范.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-测试文档/082-YYC3-CCC-测试文档-集成测试规范.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-类型定义/075-YYC3-CCC-类型定义-前端-组件Props类型约束.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-类型定义/074-YYC3-CCC-类型定义-前端-TypeScript全局类型声明.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/064-YYC3-CCC-API文档-业务域-流程接口手册.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/071-YYC3-CCC-API文档-版本管理-接口迭代变更记录.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/065-YYC3-CCC-API文档-技术类型-国际化接口.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/068-YYC3-CCC-API文档-技术类型-文件服务接口.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/067-YYC3-CCC-API文档-技术类型-3D场景接口.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/063-YYC3-CCC-API文档-业务域-测试接口手册.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/066-YYC3-CCC-API文档-技术类型-动画接口.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/070-YYC3-CCC-API文档-第三方-分析服务接口.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/062-YYC3-CCC-API文档-业务域-联系接口手册.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/058-YYC3-CCC-API文档-通用规范-接口签名鉴权手册.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/056-YYC3-CCC-API文档-通用规范-RESTful接口设计标准.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/060-YYC3-CCC-API文档-业务域-服务接口手册.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/059-YYC3-CCC-API文档-业务域-首页接口手册.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/061-YYC3-CCC-API文档-业务域-定价接口手册.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-API文档/057-YYC3-CCC-API文档-通用规范-接口错误码体系.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/051-YYC3-CCC-详细设计-第三方集成文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/052-YYC3-CCC-详细设计-SEO优化方案.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/053-YYC3-CCC-详细设计-PWA实现方案.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/050-YYC3-CCC-详细设计-权限控制实现.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/README.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/049-YYC3-CCC-详细设计-异常处理规范.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/047-YYC3-CCC-详细设计-业务逻辑实现.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/048-YYC3-CCC-详细设计-数据校验规则.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/054-YYC3-CCC-详细设计-预留文档位01.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/045-YYC3-CCC-详细设计-性能优化方案.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/041-YYC3-CCC-详细设计-组件设计文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/046-YYC3-CCC-详细设计-通用组件封装文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/044-YYC3-CCC-详细设计-响应式适配文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/036-YYC3-CCC-详细设计-模块详细设计文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/040-YYC3-CCC-详细设计-技术实现方案.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/039-YYC3-CCC-详细设计-界面原型文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/037-YYC3-CCC-详细设计-UI-UX设计规范.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/042-YYC3-CCC-详细设计-动画效果设计文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/038-YYC3-CCC-详细设计-交互流程图.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-详细设计/043-YYC3-CCC-详细设计-国际化实现文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-架构设计/030-YYC3-CCC-架构设计-部署架构设计文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-架构设计/031-YYC3-CCC-架构设计-预留文档位01.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-项目规划/014-YYC3-CCC-项目规划-风险管理计划.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-项目规划/016-YYC3-CCC-项目规划-预留文档位01.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-项目规划/README.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-项目规划/015-YYC3-CCC-项目规划-沟通管理计划.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-架构设计/029-YYC3-CCC-架构设计-响应式架构设计文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-架构设计/025-YYC3-CCC-架构设计-安全架构设计文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-架构设计/027-YYC3-CCC-架构设计-动画交互架构设计文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-架构设计/023-YYC3-CCC-架构设计-技术选型报告.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-架构设计/026-YYC3-CCC-架构设计-国际化架构设计文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-架构设计/028-YYC3-CCC-架构设计-性能优化架构文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-架构设计/024-YYC3-CCC-架构设计-组件架构设计文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-架构设计/022-YYC3-CCC-架构设计-数据架构设计文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-架构设计/021-YYC3-CCC-架构设计-系统架构设计文档.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-需求规划/006-YYC3-CCC-需求规划-需求变更管理计划.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-需求规划/README.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-需求规划/005-YYC3-CCC-需求规划-AI功能需求设计.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-需求规划/003-YYC3-CCC-需求规划-项目需求说明书.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-需求规划/001-YYC3-CCC-需求规划-项目章程.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-需求规划/002-YYC3-CCC-需求规划-可行性分析报告.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-需求规划/004-YYC3-CCC-需求规划-利益相关者分析.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-需求规划/007-YYC3-CCC-需求规划-预留文档位01.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-项目规划/013-YYC3-CCC-项目规划-资源分配计划.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-项目规划/012-YYC3-CCC-项目规划-项目进度计划.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-项目规划/011-YYC3-CCC-项目规划-项目管理计划.md',
  '/Users/yanyu/Git-YYC-Cube/YYC-Cube/yyc3-customer-care-center/docs/YYC3-CCC-标准化审核清单.md'
];

// Process each markdown file
markdownFiles.forEach((filePath) => {
  try {
    // Read the file content
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Split content into lines
    let lines = content.split('\n');
    
    // Remove leading empty lines
    while (lines.length > 0 && lines[0].trim() === '') {
      lines.shift();
    }
    
    // If there are at least 2 lines, move the second line to become the first
    if (lines.length >= 2) {
      const secondLine = lines[1];
      lines.splice(1, 1);
      lines.unshift(secondLine);
    }
    
    // Join lines back together
    const newContent = lines.join('\n');
    
    // Write the modified content back to the file
    fs.writeFileSync(filePath, newContent, 'utf8');
    
    console.log(`Processed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
});

console.log('\nProcessing complete!');
