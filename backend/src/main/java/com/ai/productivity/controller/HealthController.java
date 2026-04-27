package com.ai.productivity.controller;

import com.ai.productivity.common.Result;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

/**
 * 健康检查控制器
 *
 * @author springtao-li
 * @since 2026-04-27
 */
@Tag(name = "健康检查", description = "系统健康检查接口")
@RestController
public class HealthController {

    @Operation(summary = "健康检查", description = "检查服务是否正常运行")
    @GetMapping("/health")
    public Result<Map<String, Object>> health() {
        Map<String, Object> data = new HashMap<>();
        data.put("status", "UP");
        data.put("service", "AI Productivity Hub");
        data.put("version", "1.0.0");
        data.put("timestamp", LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
        return Result.success(data);
    }

    @Operation(summary = "欢迎页面", description = "API欢迎页面")
    @GetMapping("/")
    public Result<String> welcome() {
        return Result.success("欢迎使用 AI Productivity Hub API 🚀");
    }
}
