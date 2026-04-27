package com.ai.productivity;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * AI生产力中心主应用类
 *
 * @author springtao-li
 * @since 2026-04-27
 */
@SpringBootApplication
@MapperScan("com.ai.productivity.mapper")
public class ProductivityHubApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProductivityHubApplication.class, args);
        System.out.println("""

                ╔═══════════════════════════════════════════════════════╗
                ║                                                       ║
                ║    AI Productivity Hub 启动成功! 🚀                   ║
                ║                                                       ║
                ║    API文档: http://localhost:8080/doc.html           ║
                ║    健康检查: http://localhost:8080/health            ║
                ║                                                       ║
                ╚═══════════════════════════════════════════════════════╝
                """);
    }
}
